import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import styles from '../routes/Home.module.css'

export default function MenusGreenbg() {
    const [search, setSearch] = useState()
    const navigate = useNavigate();

    // Whenever typed in searchbox
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    // Menus
    const Menu = ({ name, state }) => {
        return (
            <Link to='/category' state={{ category: state }}>
                <li className="py-3 border-b-2 list-none hover:text-emerald-600">
                    {name}
                </li>
            </Link>
        )
    }

    return (<>
        <div className={styles.menusGreenbg}>
            <div className={styles.menus}>
                {/* search box */}
                <form onSubmit={() => navigate('/category', { state: { homeSearch: search } })}>
                    <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
                        <input onChange={onChange} type="text" name="search" placeholder="search"
                            className=" bg-gray-100 rounded-md  outline-none pl-2 ring-emerald-700 w-full mr-2 p-2" />
                        <button type='submit' className="material-icons-outlined">
                            search
                        </button>
                    </div>
                </form>
                {/* Menus */}
                <div className="bg-white rounded-md">
                    <div className="text-center">
                        <li className="py-4 my-2 border-b-2 list-none font-bold">
                            Category
                        </li>
                        <Menu name='Mens' state='MENS' />
                        <Menu name='Womens' state='WOMENS' />
                        <Menu name='Food' state='FOOD' />
                        <Menu name='Funiture' state='FUNITURE' />
                        <Menu name='Digital' state='DIGITAL' />
                    </div>
                </div>
            </div>
            {/* Green part */}
            <div className={`${styles.greenbg} h-96 col-span-4 bg-gradient-to-tr from-emerald-800 to-emerald-500 rounded-md flex items-center`}>
                <div className="ml-20 w-80">
                    <h2 className="text-white text-4xl">
                        Stillsteal
                    </h2>
                    <p className="text-emerald-100 mt-5 capitalize font-thin tracking-wider leading-7">
                        We say 'That's Steal!' Whenever we saw reasonable price,
                        but all the products here are still steal!
                    </p>
                    <Link to='/category#' className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-emerald-100">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </>)
}