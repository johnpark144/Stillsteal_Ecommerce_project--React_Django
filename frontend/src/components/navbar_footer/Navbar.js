import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import CartContext from '../../context/CartContext';
import styles from './NavSideBarNavbarFooter.module.css'

export default function Navbar({ setIsLoggedIn, setShowSideBar }) {
    let { user, logoutUser } = useContext(AuthContext)
    let { cartList } = useContext(CartContext)

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [user])

    // Menus
    const Menu = ({ linkTo, name }) => {
        return (
            <li>
                <Link to={linkTo} className={'text-gray-700 hover:text-emerald-600 text-md'}>
                    {name}
                </Link>
            </li>
        )
    }

    return (<>
        <header>
            {/* Navbar and Menu */}
            <nav className=" bg-gradient-to-r from-green-50 to-slate-200 shadow">
                <div className="flex justify-between items-center py-6 px-20">
                    {/* Logo and Stillsteal */}
                    <div style={{ fontFamily: "'Aldrich', sans-serif" }}>
                        <div className="text-2xl font-bold bg-gradient-to-tr from-lime-600 to-emerald-600 bg-clip-text text-transparent hover:cursor-pointer">
                            <span className="material-icons-outlined">local_shipping</span>
                            &nbsp;
                            <Link to='/'>
                                Stillsteal
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            {/* Menus */}
                            <ul className={`${styles.menus} flex space-x-4 items-center`}>
                                <Menu linkTo='/' name='Home' />
                                <Menu linkTo='/category' name='Category' />
                                <Menu linkTo='/cart' name='Cart' />
                                <Menu linkTo='/checkout' name='Checkout' />
                                <Menu linkTo='/aboutus' name='About Us' />
                            </ul>
                            {/* Login, Logout */}
                            <div className={styles.loginSignup}>
                                {user ? (<>
                                    <p onClick={logoutUser} className="text-text-gray-600 py-2 hover:cursor-pointer hover:text-emerald-600">
                                        LOGOUT
                                    </p>
                                    <p className="text-text-gray-600 py-2 px-4 rounded text-white bg-gradient-to-tr from-blue-800 to-emerald-700 hover:shadow-lg">
                                        {`${user.username}`}
                                    </p>
                                </>) : (<>
                                    <Link to={'/login'} className="text-text-gray-600 py-2 hover:cursor-pointer hover:text-emerald-600">
                                        LOGIN
                                    </Link>
                                    <Link to={'/signup'} className="text-text-gray-600 py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-blue-800 to-emerald-700 hover:shadow-lg">
                                        SIGNUP
                                    </Link>
                                </>)}
                            </div>
                            {/* Cart, Cart number */}
                            <div className={styles.cart}>
                                <Link to='/cart' className="material-icons text-gray-700 hover:text-emerald-600 text-md">
                                    shopping_cart
                                </Link>
                                <button type="button" className="w-8 h-8 text-base rounded-full text-white bg-red-500">
                                    <span id="cartNumber" className="p-1">
                                        {cartList.length}
                                    </span>
                                </button>
                            </div>
                            {/* SideBarMenu */}
                            <div onClick={() => setShowSideBar(true)} className={`${styles.sideBarMenu} material-icons-outlined`}>
                                menu
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>)
}