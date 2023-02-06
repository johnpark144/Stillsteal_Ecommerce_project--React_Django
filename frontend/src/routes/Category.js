import { useContext, useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MenuBar from '../components/Category_MenuBar'
import PostNumberPagination from '../components/Category_PostNumberPagination';
import CartContext from '../context/CartContext'
import useFetch from '../hooks/useFetch'
import styles from './Category.module.css'

export default function Category() {
    let { cartList, setCartList } = useContext(CartContext)  // state management with useContext To use cartlist globally
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState()
    const [showSearchList, setShowSearchList] = useState(false)
    const location = useLocation();

    // CustomHook
    let data = useFetch('https://vyckd353.pythonanywhere.com/api/products/') // Backend Site

    // If you accessed thru either Certain Cateogry or Search or from CategoryDetail
    let fromWhere
    let _page
    let _limit
    let _products
    let _sortBy
    let _lessThenPrice
    if (location.state) {
        if (location.state.hasOwnProperty('category')) {    // Certain Cateogry from Home
            fromWhere = location.state.category
        } else if (location.state.hasOwnProperty('homeSearch')) {  // Search from Home
            fromWhere = location.state.homeSearch
            // Comeback from CategoryDetail (To preserve Number of posts, Current page and Products to display)
        } else if (location.state._limit) {
            _limit = Number(location.state._limit)
            _page = Number(location.state._page)
            _products = location.state._products
            _sortBy = location.state._sortBy
            _lessThenPrice = location.state._lessThenPrice
        }
    }

    // Products to display (datas preserved if you came back from CategoryDetail)
    const [products, setProducts] = useState(_products ? _products : [])

    // Search
    const doSearch = (e) => {
        const currentQuery = e.target.search.query.toString();
        setSearchParams({
            filter: currentQuery,
        });
    };

    // Save past-searchlist in localStorage
    const saveSearchList = (search) => {
        let pastSearchList = JSON.parse(localStorage.getItem('pastSearchList'))
        if (pastSearchList.includes(search)) {    // If the search keyword already exist, delete it
            pastSearchList.splice((pastSearchList.indexOf(search)), 1)
        }
        localStorage.setItem('pastSearchList', JSON.stringify([search, ...pastSearchList])) // Save the keyword in localStorage
    }

    // Set the products to display depend on Certain Cateogry or Search from Home or regular access
    useEffect(() => {
        if (!_products && data[0]) {
            if (fromWhere) {
                if (['MENS', 'WOMENS', 'FOOD', 'FUNITURE', 'DIGITAL'].includes(fromWhere)) {
                    setProducts(data.filter((arr) => {
                        return arr.category === fromWhere   // Cateogry from Home
                    }));
                } else {
                    const searchData = data.filter((arr) => {
                        return arr.name.toUpperCase().match(new RegExp(fromWhere.toUpperCase()));
                    });   // Search from Home (no distinction between Uppercase and lowercase)
                    // In case of no list, create a Array[0] = none (To prevent from infinite loading)
                    searchData[0] ? setProducts(searchData) : setProducts(['none'])
                    saveSearchList(fromWhere)
                }
            } else {
                setProducts(data)  // Regular set
            }
        }
    }, [data])

    useEffect(() => {
        if (!_products) {
            setSearch(searchParams.get('search')) // Save the keyword from '?search='
            if (search) {
                const searchData = data.filter((arr) => {
                    return arr.name.toUpperCase().match(new RegExp(search.toUpperCase()));
                })
                searchData[0] ? setProducts(searchData) : setProducts(['none'])
                saveSearchList(search)
            }
        }
    }, [data])

    // Pagination useState
    const [limit, setLimit] = useState(_limit ? _limit : 6);
    const [page, setPage] = useState(_page ? _page : 1);
    const offset = (page - 1) * limit;
    const [numPages, setMumPages] = useState()

    // Pagination
    useEffect(() => {
        if (products) {
            setMumPages(Math.ceil(products.length / limit));
        }
    }, [products, limit])

    // Category
    const [category, setCategory] = useState()
    const categorize = (e) => {
        setCategory(e.target.innerText)
        setPage(1) // Whenever moving to another, Go to Page 1
    }

    // Category, PriceRange, SortBy(Price, Name, Rate)
    const [sortBy, setSortBy] = useState(_sortBy ? _sortBy : 'SortBy');
    const [lessThenPrice, setLessThenPrice] = useState(_lessThenPrice ? _lessThenPrice : 2000);

    useEffect(() => {
        let dataByLessThenPrice = data

        // Category
        if (category) {
            if (category !== 'ALL') {
                dataByLessThenPrice = data.filter((arr) => {
                    return arr.category === category
                });
            }
        }

        // PriceRange
        dataByLessThenPrice = dataByLessThenPrice.filter((arr) => {
            return Number(arr.price) <= Number(lessThenPrice);
        });

        // SortBy(Price, Name, Rate)
        if (sortBy === 'price') {
            dataByLessThenPrice.sort((a, b) => {
                return Number(a.price) - Number(b.price);
            });
        } else if (sortBy === '-price') {
            dataByLessThenPrice.sort((a, b) => {
                return Number(b.price) - Number(a.price);
            });
        } else if (sortBy === 'rate') {
            dataByLessThenPrice.sort((a, b) => {
                return Number(b.star) - Number(a.star);
            });
        } else if (sortBy === 'name') {
            dataByLessThenPrice.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                if (a.name === b.name) return 0;
            });
        } else if (sortBy === '-name') {
            dataByLessThenPrice.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                if (a.name === b.name) return 0;
            });
        }

        // If you cameback from detail, render previous products but when changed sortBy or price, render new value
        if (_products && !dataByLessThenPrice[0] && Number(lessThenPrice) !== 0) {
            setProducts(_products)
        } else {
            setProducts(dataByLessThenPrice)
        }
    }, [category, sortBy, lessThenPrice])

    // ScrollY value for Cart
    const [scrollYValue, setScrollYValue] = useState(window.scrollY)
    window.addEventListener('scroll', () => {
        setScrollYValue(window.scrollY)
    })

    return (
        <div className={styles.category}>
            {/* Scroll Cart */}
            <Link to='/cart#' className={scrollYValue >= 400 ? styles.showScrollDownCart : styles.hideScrollDownCart}
                style={scrollYValue <= 200 ? { display: "none" } : { display: "flex" }}>
                <span className={`material-icons`}>
                    shopping_cart
                </span>
                <button type="button" className="w-8 h-8 text-base rounded-full text-white bg-red-500">
                    <span id="cartNumber" className="p-1">
                        {cartList.length}
                    </span>
                </button>
            </Link>
            {/* Menu Bar */}
            <MenuBar categorize={categorize} doSearch={doSearch} setShowSearchList={setShowSearchList} showSearchList={showSearchList} />
            <div onClick={() => { setShowSearchList(false) }}>
                {/* Pagination */}
                <PostNumberPagination setSortBy={setSortBy} lessThenPrice={lessThenPrice} setLessThenPrice={setLessThenPrice}
                    limit={limit} setLimit={setLimit} page={page} setPage={setPage} numPages={numPages} sortBy={sortBy} />
                {/* products */}
                {products[0] ? (
                    products[0] === 'none' ? (
                        // In case of no result
                        <div style={{ textAlign: "center", margin: "100px" }}>
                            <b>No results were found for your search.</b>
                        </div>
                    ) : (
                        <div className={styles.products}>
                            {products.slice(offset, offset + limit).map((product) => (
                                <div id={product.id} className={styles.product} key={product.id}>
                                    {/* Product Image, Name, Price */}
                                    <Link to={`/category/${product.id}#`} className={styles.productImgName}
                                        state={{ limit: limit, page: page, products: products, sortBy: sortBy, lessThenPrice: lessThenPrice }}>
                                        <img className={styles.productImg} alt={product.name} src={product.image} />
                                        <h3 className={styles.productName}>{product.name.length >= 40 ? product.name.slice(0, 40) + '...' : product.name}</h3>
                                    </Link>
                                    <div>
                                        <h3>${product.price}</h3>
                                        <h3>{product.prevPrice ? '$' + product.prevPrice : ''}</h3>
                                    </div>
                                    {/* ADD TO CART Button */}
                                    <div className={styles.addBtn} onClick={() => { setCartList([...cartList, product.id]) }}>
                                        ADD TO CART
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ) : (
                    lessThenPrice === '0' ? (
                        // If price set '0'
                        <div style={{ textAlign: "center", margin: "100px" }}>
                            <b>No results were found for your search.</b>
                        </div>
                    ) : (
                        // Loading (Spiner)
                        <div className={`${styles.spiner} animate-spin inline-block w-40 h-40 border-[20px] border-current border-t-transparent text-zinc-200 rounded-full`} role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                )}
                {/* Pagination */}
                <PostNumberPagination limit={limit} setLimit={setLimit} page={page} setPage={setPage} numPages={numPages} bottom={true} />
            </div>
        </div>
    )
}
