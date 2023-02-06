import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartTableBody from "../components/Cart_CartTableBody";
import CartContext from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import styles from './Checkout.module.css'

export default function Checkout() {
    let { cartList, setCartList, products, setProducts, tempArr } = useContext(CartContext);
    const navigate = useNavigate();

    // Form to check
    const [firstNameForm, setFirstNameForm] = useState(true)
    const [lastNameForm, setLastNameForm] = useState(true)
    const [emailForm, setEmailForm] = useState(true)
    const [addressForm, setAddressForm] = useState(true)
    const [cityForm, setCityForm] = useState(true)
    const [stateForm, setStateForm] = useState(true)
    const [zipcodeForm, setZipcodeForm] = useState(true)
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const zipcodeRef = useRef(null);

    // CustomHook
    let data = useFetch('https://vyckd353.pythonanywhere.com/api/products/')

    // Products in cartlist
    useEffect(() => {
        setProducts(data.filter((arr) => {
            return cartList.includes(arr.id)
        }));
    }, [data])

    // Checkout Submit
    const onSubmit = () => {
        if (cartList[0]) {
            if (firstNameRef?.current?.value && lastNameRef?.current?.value && emailRef?.current?.value && addressRef?.current?.value
                && cityRef?.current?.value && stateRef?.current?.value && zipcodeRef?.current?.value) {
                alert('Checkout succeed !')
                localStorage.removeItem('productsInCart')
                setCartList([])
                navigate('/')
            }
            setFirstNameForm(firstNameRef?.current?.value)
            setLastNameForm(lastNameRef?.current?.value)
            setEmailForm(emailRef?.current?.value)
            setAddressForm(addressRef?.current?.value)
            setCityForm(cityRef?.current?.value)
            setStateForm(stateRef?.current?.value)
            setZipcodeForm(zipcodeRef?.current?.value)
        } else {
            alert('There is Nothing in your cart.')
        }
    }

    // Tailwind Css classes
    const labelClass = "block mb-2 text-sm font-bold text-gray-700"
    const inputClass = "w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    const pleaseInputmsg = <p className="text-xs italic text-red-500">Please input this section</p>
    const orderSummaryClass = "px-6 align-middle border border-solid py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-700 text-emerald-200 border-emerald-600"

    return <>
        <div className={styles.container}>
            {/* Checkout Form */}
            <div className={`${styles.checkoutForm} drop-shadow-2xl`}>
                <h3 className="pt-4 mb-4 text-2xl text-center">Checkout</h3>
                <hr className="mb-6 border-t" />
                <form>
                    <div className="mb-4 flex justify-between">
                        <div className="mb-4 mr-2">
                            <label className={labelClass} htmlFor="firstName">First Name</label>
                            <input className={`${!firstNameForm && "border-red-500"} ${inputClass}`} id="firstName" type="text" ref={firstNameRef} placeholder="First Name" />
                            {!firstNameForm && pleaseInputmsg}
                        </div>
                        <div className="ml-2">
                            <label className={labelClass} htmlFor="lastName">Last Name</label>
                            <input className={`${!lastNameForm && "border-red-500"} ${inputClass}`} id="lastName" type="text" ref={lastNameRef} placeholder="Last Name" />
                            {!lastNameForm && pleaseInputmsg}
                        </div>
                    </div>
                    <div className="mb-7">
                        <label className={labelClass} htmlFor="email">Email</label>
                        <input className={`${!emailForm && "border-red-500"} ${inputClass}`} id="email" type="email" ref={emailRef} placeholder="Email" />
                        {!emailForm && pleaseInputmsg}
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="mb-4 mr-2">
                            <label className={labelClass} htmlFor="address">Address</label>
                            <input className={`${!addressForm && "border-red-500"} ${inputClass}`} id="address" type="text" ref={addressRef} placeholder="ex) 202 East Sam Houston Pkwy S" />
                            {!addressForm && pleaseInputmsg}
                        </div>
                        <div className="ml-2">
                            <label className={labelClass} htmlFor="city">City</label>
                            <input className={`${!cityForm && "border-red-500"} ${inputClass}`} id="city" type="text" ref={cityRef} placeholder="ex) Houston" />
                            {!cityForm && pleaseInputmsg}
                        </div>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="mb-4 mr-2">
                            <label className={labelClass} htmlFor="State">State</label>
                            <input className={`${!stateForm && "border-red-500"} ${inputClass}`} id="state" type="text" ref={stateRef} placeholder="ex) TX" />
                            {!stateForm && pleaseInputmsg}
                        </div>
                        <div className="ml-2">
                            <label className={labelClass} htmlFor="zipcode">Zip code</label>
                            <input className={`${!zipcodeForm && "border-red-500"} ${inputClass}`} id="zipcode" type="text" ref={zipcodeRef} placeholder="ex) 77510" />
                            {!zipcodeForm && pleaseInputmsg}
                        </div>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="mb-6 text-center">
                        <button onClick={onSubmit} type="button" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                            Continue
                        </button>
                    </div>
                </form>
            </div>

            {/* ORDER SUMMARY (Cartlist) */}
            <div className={`${styles.products} relative break-words mb-6 drop-shadow-2xl rounded bg-emerald-800 text-white`}>
                {/* Back to cart Buttton */}
                <div className={styles.backBtn}>
                    <button>
                        <Link to='/cart'>
                            Back to cart
                        </Link>
                    </button>
                </div>
                <hr className="border-t" />
                <div className={`${orderSummaryClass} ${styles.orderMsg}`}>
                    <h3>Order Summary</h3>
                    <span />
                    <span>
                        <h3>Items : {cartList.length} </h3>
                        <h3>Total : ${tempArr.toFixed(2)}</h3>
                    </span>
                </div>
                <hr className="mb-6 border-t" />
                <div className={styles.table}>
                    <table>
                        <tbody>
                            <CartTableBody products={products} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}