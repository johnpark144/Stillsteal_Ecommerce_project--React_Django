import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import styles from './SignupLogin.module.css'

export default function Login({ setIsLoggedIn }) {
    let { user, loginUser } = useContext(AuthContext)    // state management with useContext To get Auth globally
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [user])

    return <>
        <div className={styles.container}>
            {/* Leftside */}
            <div className={`${styles.leftSide} flex bg-gradient-to-tr from-blue-800 to-emerald-700 i justify-around items-center`}>
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Stillsteal</h1>
                    <p className="text-white mt-1">If you want to shop without Login,</p>
                    <p className="text-white mt-1">Click the 'Home' button below.</p>
                    <Link to='/' className="block w-28 bg-white text-emerald-900 text-center mt-4 py-2 rounded-2xl font-bold mb-2">
                        Home
                    </Link>
                </div>
            </div>
            {/* Rightside */}
            <div className={`${styles.rightSide} flex justify-center items-center bg-white`}>
                <form onSubmit={loginUser} className="bg-white">
                    {/* Hello, Welcome */}
                    <h1 className="text-emerald-600 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    {/* Username */}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <span className="material-icons-outlined h-5 w-5 text-gray-400"
                            style={{ 'WebkitUserSelect': 'none', 'MozUserSelect': 'none', 'msUserSelect': 'none', 'userSelect': 'none' }}>
                            people
                        </span>
                        <input className="pl-2 outline-none border-none" type="text" name="username" placeholder="Username" />
                    </div>
                    {/* Password */}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" name="password" placeholder="Password" />
                    </div>
                    {/* Login button */}
                    <button type="submit" className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    {/* Go to Signup */}
                    <Link to='/signup' className="text-sm ml-2 hover:text-emerald-500 cursor-pointer">
                        You want to create a account? Signup
                    </Link>
                </form>
            </div>
        </div>
    </>
}