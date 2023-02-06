import { useContext } from "react"
import AnimationButton from "../components/Cart_AnimationButton"
import CartTableBody from "../components/Cart_CartTableBody"
import CartContext from "../context/CartContext"
import styles from './Cart.module.css'

export default function Cart() {
    let { tempArr } = useContext(CartContext)

    // Tailwind Css classes
    const tableMenus = "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-700 text-emerald-200 border-emerald-600"
    const tbodyClass = "border-t-0 px-5 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4"

    return <>
        <div className={styles.continer}>
            <div className={styles.table}>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-800 text-white">
                    {/* Table title */}
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                <h3 className="font-semibold text-lg text-white">CART</h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto ">
                        <table className="items-center w-full bg-transparent border-collapse">
                            {/* Table Thead */}
                            <thead className={styles.thead}>
                                <tr>
                                    <th className={tableMenus}>Product</th>
                                    <th className={tableMenus}>Price</th>
                                    <th className={tableMenus}>Quantity</th>
                                    <th className={tableMenus}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Table of products in cart */}
                                <CartTableBody fromCart={true} />
                                {/* Total */}
                                <tr style={{ fontSize: '18px' }} className={tableMenus}>
                                    <th />
                                    <td />
                                    <td />
                                    <td className={`${styles.subTotal} ${tbodyClass}`}>
                                        <h3>Total : ${tempArr.toFixed(2)}</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Button */}
                <div className={styles.btns}>
                    <br /><br />
                    <AnimationButton linkTo='/category' name='Continue Shopping' />
                    <AnimationButton linkTo='/checkout' name='Proceed To Checkout' id={styles.checkoutBtn} />
                </div>
            </div>
        </div>
    </>
}