import { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import styles from '../routes/Cart.module.css';

export default function CartTableBody({ fromCart, fromCategoryDetail }) {
    let { cartList, setCartList, products, setProducts, data } = useContext(CartContext);

    // To set Products in cartlist
    useEffect(() => {
        setProducts(data.filter((arr) => {
            return cartList.includes(arr.id)  // check numbers in cartlist and arr's id from data (to compare 2 arrays)
        }));
    }, [data, cartList])

    //  Do add or subtract
    const addSubtract = (e) => {
        let add = e.target.innerText
        let product_id = Number(e.target.getAttribute('product_id'))
        if (add === '+') {
            setCartList([...cartList, product_id])  // If click '+', add one product_id in the list (Duplicate is ok)
        } else {
            let arr = [...cartList]
            arr.splice(arr.indexOf(product_id), 1) // If click '-', remove one from index of product_id, namely, subtract one product_id
            setCartList(arr)
        }
    }

    // Tailwind Css classes
    const productClass = "border-t-0 px-5 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
    const btnClass = "h-10 w-10 border text-base font-medium rounded text-black bg-white hover:bg-gray-100 px-4 py-2"
    const tbodyClass = "border-t-0 px-5 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4"

    return <>
        {/* Table Tbody */}
        {products.map((product) => (
            cartList.reduce((cnt, element) => cnt + (product.id === element), 0) ? (
                <tr key={product.id} className={styles.cartTableBody}>
                    {/*########### PRODUCT ###########*/}
                    <th className={productClass}>
                        {/* In the case of using at CategoryDetail */}
                        {fromCategoryDetail ? (
                            <div className={styles.productInDetail}>
                                <img alt={product.name} src={product.image} className={styles.productImg} />
                                <div>
                                    <h3>{product.name.length >= 25 ? product.name.slice(0, 25) + '...' : product.name}</h3>
                                    <span>${product.price}</span>
                                    <span>x {cartList.reduce((cnt, element) => cnt + (product.id === element), 0)}</span>
                                    <h3>${(product.price *
                                        (cartList.reduce((cnt, element) => cnt + (product.id === element), 0))).toFixed(2)}
                                    </h3>
                                </div>
                            </div>
                        ) : (
                            // In the case of using at Checkout or Cart
                            <div className={styles.productNotInDetailContainer}>
                                <div className={styles.productNotInDetail}>
                                    <img alt={product.name} src={product.image} className={styles.productImg} />
                                    <h3>{product.name.length >= 60 ? product.name.slice(0, 60) + '...' : product.name}</h3>
                                </div>
                            </div>
                        )}
                    </th>
                    {/* Not in the case of using at CategoryDetail */}
                    {!fromCategoryDetail ? (<>
                        {/*###########  PRICE ########### // goUpward is To adjust the layout When used in checkout */}
                        <td className={`${styles.priceTd} ${tbodyClass} ${!fromCart && products.length < 3 ? `${styles.goUpward} mt-20`:""}`}>
                            <h3 className={styles.forResponsive}>Price : </h3>
                            <h3>${product.price}</h3>
                        </td>
                        {/*###########  QUANTITY ###########*/}
                        <td className={`${styles.quantityTd} ${tbodyClass} ${!fromCart && products.length < 3 ? styles.goUpward:""}`}>
                            <div className={styles.productQuantity}>
                                {/* In the case of using at Cart */}
                                {fromCart ? (
                                    <>
                                        <button onClick={addSubtract} product_id={product.id} className={btnClass}>
                                            +
                                        </button>
                                        <h3>{cartList.reduce((cnt, element) => cnt + (product.id === element), 0)}</h3>
                                        <button onClick={addSubtract} product_id={product.id} className={btnClass}>
                                            -
                                        </button>
                                    </>
                                ) : (
                                    // in the case of using at Checkout
                                    <h3>x {cartList.reduce((cnt, element) => cnt + (product.id === element), 0)}</h3>
                                )}
                            </div>
                        </td>
                        {/*###########  TOTAL ###########*/}
                        <td className={`${styles.totalTd} ${tbodyClass} ${!fromCart && products.length < 3 ? styles.goUpward:""}`}>
                            <h3 className={styles.forResponsive}>Total : </h3>
                            <h3>${(product.price * (cartList.reduce((cnt, element) => cnt + (product.id === element), 0))).toFixed(2)}</h3>
                        </td>
                    </>
                    ) : (
                        ""
                    )}
                </tr>
            ) : (
                ""
            )
        ))}
    </>
}
