import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import CartTableBody from '../components/Cart_CartTableBody';
import CartContext from '../context/CartContext';
import useFetch from '../hooks/useFetch';
import styles from './CategoryDetail.module.css'

export default function CategoryDetail() {
    let { cartList, setCartList, tempArr } = useContext(CartContext);

    const [productDetail, setProductDetail] = useState()
    const [showTmobileModal, setShowTmobileModal] = useState(false)
    const [showCardModal, setShowCardModal] = useState(false)
    const [blackStarArr, setBlackStarArr] = useState([])
    const [whiteStar, setwhiteStar] = useState([])

    const { id } = useParams();
    const location = useLocation();

    let _page
    let _limit
    let _products
    let _sortBy
    let _lessThenPrice
    if (location.state) {
        _limit = location.state.limit
        _page = location.state.page
        _products = location.state.products
        _sortBy = location.state.sortBy
        _lessThenPrice = location.state.lessThenPrice
    }

    // CustomHook
    let data = useFetch('https://vyckd353.pythonanywhere.com/api/products/') // Backend Site

    // Call the same products with Id from useParams
    useEffect(() => {
        let detail = data.filter(arr => (arr.id === Number(id)))
        setProductDetail(detail[0])
    }, [data])

    // Create Stars(Rate)
    useEffect(() => {
        if (productDetail) {
            let blackStar = Math.floor(productDetail.star)
            let arr = []
            for (let i = 0; i < blackStar; i++) {
                arr = [...arr, i]
            }
            setwhiteStar(productDetail.star % 1)
            setBlackStarArr(arr)
        }
    }, [productDetail])

    // Tailwind Css classes
    const cartTableClass = "px-6 align-middle border border-solid py-7 rounded-tr-2xl rounded-br-2xl text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-700 text-emerald-200 border-emerald-600"

    return <>
        {productDetail ? (<>
            <div className={styles.productDetail}>
                <div>
                    {/* Leftside */}
                    <Link to={`/category#${id}`} className={`${styles.back} material-icons-outlined`}
                    state={{ _limit:_limit, _page:_page, _products:_products, _sortBy:_sortBy, _lessThenPrice:_lessThenPrice}}>
                        arrow_back_ios
                    </Link>
                    <div className={styles.leftSide}>
                        {productDetail.hotDeal ? (
                            <img className={styles.hotdealsImg} alt='hotdealsImg' src='https://user-images.githubusercontent.com/106279616/201270112-b70ee474-e1f2-404b-9bc4-d1abd08d1b60.png' />
                        ) : (
                            ""
                        )}
                        <img className={styles.productImg} alt={productDetail.name} src={productDetail.image} />
                    </div>
                    {/* Center */}
                    <div className={styles.center}>
                        {/* Category, Stars(Rate)  */}
                        <h3 className={styles.category}>{productDetail.category}</h3>
                        <h3 className={styles.star}>
                            {blackStarArr.map((idx) => {
                                return <span key={idx} className="material-icons-outlined">star</span>
                            })}
                            {whiteStar ? <span className="material-icons-outlined">star_rate</span> : ""}
                        </h3>
                        {/* Name, Price */}
                        <h3 className={styles.name}>{productDetail.name}</h3>
                        <div className={styles.price}>
                            <span>${productDetail.price}</span>
                            <span>{productDetail.prevPrice && `$${productDetail.prevPrice}`}</span>
                        </div>
                        {/* Coupon */}
                        <hr className="mb-5 mt-5 border " />
                        <div className={styles.coupon}>
                            <div>
                                <span className="material-icons-outlined">
                                    local_offer
                                </span>
                                <span>
                                    Coupon!!
                                </span>
                            </div>
                            <span>There is discount coupon that you can use for this one</span>
                            <span onClick={()=>{alert("You got the coupon")}}>Get It</span>
                        </div>
                        {/* Color, ETA */}
                        {productDetail.color ? (
                            <div className={styles.color}>
                                <hr className="mb-5 mt-5 border" />
                                <span>Color : </span>
                                <b>{productDetail.color}</b>
                            </div>
                        ) : (
                            ""
                        )}
                        <hr className="mb-5 mt-5 border" />
                        <div>
                            <div className={styles.delivery}>
                                <span className="material-icons-outlined">
                                    flight
                                </span>
                                <span>Free delivery</span>
                            </div>
                            <h3 className={styles.eta}>This product arrives about in <b>{productDetail.eta}days</b> on average</h3>
                        </div>
                        {/* Benefits, AD */}
                        <hr className="mb-5 mt-5 border text-slate-50" />
                        <div className={styles.benefits}>
                            {/* Tmobile Dropdown */}
                            <div>
                                <span onClick={() => setShowTmobileModal(true)} className={styles.tmobile}>
                                    <span>Discount for TMobile User! + Save 2% mileage points the most</span>
                                    <span className="material-icons-outlined">
                                        expand_more
                                    </span>
                                </span>
                            </div>
                            {showTmobileModal ? (
                                <div className={styles.tmobileModal}>
                                    <img alt='tmobile_pic' src='https://www.t-mobile.com/news/_admin/uploads/2020/06/T-Mobile_New_Logo_Primary_RGB_W-on-M.jpg' />
                                    <span>If you are TMobile User, you can have this benefit.</span>
                                    <span onClick={() => setShowTmobileModal(false)} className="material-icons-outlined">
                                        close
                                    </span>
                                </div>
                            ) : (
                                ""
                            )}
                            {/* Card Dropdown */}
                            <div>
                                <span onClick={() => setShowCardModal(true)} className={styles.card}>
                                    <span >interest-free installment with cards, Up to 12 months.</span>
                                    <span className="material-icons-outlined">
                                        expand_more
                                    </span>
                                </span>
                            </div>
                            {showCardModal ? (
                                <div className={styles.cardModal}>
                                    <div>
                                        <div className={styles.cardExplanation}>
                                            <img alt='tmobile_pic' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png' />
                                            <div>
                                                <h3>Wells Fargo</h3>
                                                <h3>2~7 month(over $10)</h3>
                                            </div>
                                        </div>
                                        <div className={styles.cardExplanation}>
                                            <img alt='tmobile_pic' src='https://www.chase.co.uk/gb/en/static/385d03e0bb873972eba46042226c3172/Hub-desktop-closingonboarding-gb-684x410.jpg' />
                                            <div>
                                                <h3>Chase</h3>
                                                <h3>2~5 month(over $30)</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={() => setShowCardModal(false)} className="material-icons-outlined">
                                        close
                                    </span>
                                </div>
                            ) : (
                                ""
                            )}
                            <h3>Discount for Credit Card User</h3>
                            <h3>[AD] Stillsteal Mileage point counpon [Get counpon]</h3>
                            <h3>[AD] Uber & UberEats Counpon [Get counpon]</h3>

                            <div href="#" className={styles.addBtn} onClick={() => { setCartList([...cartList, Number(id)]) }}>
                                ADD TO CART
                            </div>
                        </div>
                    </div>
                    {/* Rightside */}
                    <div className={`${styles.right} bg-emerald-800 text-white`}>
                        <div className={cartTableClass}>
                            <h3>Cart List</h3>
                        </div>
                        <hr className="border" />
                        <div className={styles.table}>
                            <table>
                                <tbody>
                                    <CartTableBody fromCategoryDetail={true} />
                                </tbody>
                            </table>
                        </div>
                        <hr className="border" />
                        <div className={cartTableClass}>
                            <h3>Items :{cartList.length}</h3>
                            <h3>subtotal : $ {tempArr.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>) : (
            ""
        )}
    </>
}
