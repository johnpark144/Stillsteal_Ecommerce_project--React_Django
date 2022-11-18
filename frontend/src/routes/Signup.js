import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import styles from './SignupLogin.module.css'

export default function Signup({ setIsLoggedIn }) {
    const { user, createUser } = useContext(AuthContext) // state management with useContext To get Auth globally
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [user])

    const [checked, setChecked] = useState(false)
    return <>
        <div className={`${styles.container}`}>
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
                <form onSubmit={createUser}>
                    <div className="sm:text-3xl text-2xl font-semibold text-center text-emerald-600  mb-12">
                        Registration Form
                    </div>
                    {/* Username */}
                    <div>
                        <input type="text" name="username" className="focus:outline-none border-b w-full pb-2 border-emerald-400 placeholder-gray-500" placeholder="Userame " />
                    </div>
                    {/* Email */}
                    <div>
                        <input type="email" name="email" className="focus:outline-none border-b w-full pb-2 border-emerald-400 placeholder-gray-500 my-8" placeholder="Eamil Adress " />
                    </div>
                    {/* Password */}
                    <div className="">
                        <input type="password" name="password" className="focus:outline-none border-b w-full pb-2 border-emerald-400 placeholder-gray-500 mb-8" placeholder="Password " />
                    </div>
                    {/* Password2 */}
                    <div className="">
                        <input type="password" name="password2" className="focus:outline-none border-b w-full pb-2 border-emerald-400 placeholder-gray-500 mb-8" placeholder="Password_confirm " />
                    </div>
                    {/* Terms */}
                    <div className="flex">
                        <input type="checkbox" name="checkbox" className="border-emerald-400 " value="" onChange={() => {
                            setChecked(!checked)
                        }} />
                        <div className="px-3 text-gray-500">
                            I accept terms & conditions
                        </div>
                    </div>
                    {/* Create button */}
                    <div className="flex justify-center my-6">
                        <button type={checked ? 'submit' : 'button'} className=" rounded-full  p-3 w-full sm:w-56 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-semibold"
                            onClick={checked ? null : () => { alert('Please accept the terms & conditions') }} >
                            Create Account
                        </button>
                    </div>
                    {/* Go to Login */}
                    <Link to='/login' className="text-gray-500 flex justify-center hover:text-emerald-500 cursor-pointer">
                        Already have an acount? Login
                    </Link>
                </form>
            </div>
        </div>
    </>
}