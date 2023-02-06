import { useState } from 'react';
import styles from '../routes/Category.module.css';

export default function MenuBar({ doSearch, showSearchList, setShowSearchList, categorize }) {
    // Past search list (To change list right away, Whenever search list deleted, )
    const [pastSearchListDeleted, setPastSearchListDeleted] = useState()
    const pastSearchList = (!pastSearchListDeleted ? JSON.parse(localStorage.getItem('pastSearchList')) : pastSearchListDeleted)

    return <>
        {/* Menu Bar */}
        <form onSubmit={doSearch} className="w-screen">
            <div className={`${styles.menusSearch} w-full flex flex-row items-center p-2 shadow-xs bg-emerald-500`}>
                {/* Menus */}
                <ul className={styles.menus}>
                    <li className={styles.menu} onClick={categorize}>ALL</li>
                    <li className={styles.menu} onClick={categorize}>MENS</li>
                    <li className={styles.menu} onClick={categorize}>WOMENS</li>
                    <li className={styles.menu} onClick={categorize}>FOOD</li>
                    <li className={styles.menu} onClick={categorize}>FUNITURE</li>
                    <li className={styles.menu} onClick={categorize}>DIGITAL</li>
                </ul>
                {/* search box */}
                <div className={styles.search}>
                    <span onClick={() => { setShowSearchList(true) }}>
                        <input type="search" name="search" placeholder="Search" className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
                    </span>
                    <button type='submit' className={`${styles.searchIcon} material-icons-outlined`}>
                        search
                    </button>
                </div>
            </div>
        </form>
        {/* Past Searches */}
        <div className={styles.pastSearchList} style={showSearchList ? { display: "block" } : { display: "none" }}>
            {pastSearchList[0] ? (<>
                <div><b>Past Search History</b></div>
                {pastSearchList.map((pastSearch, idx) => {
                    return (
                        <div key={idx} className={styles.pastSearch}>
                            <form onSubmit={doSearch}>
                                <span className="material-icons-outlined">
                                    search
                                </span>
                                &nbsp;
                                <input className={styles.keyWord} type="submit" name="search" value={pastSearch} />
                            </form>
                            <span onClick={() => {
                                let tempArr = [...pastSearchList]
                                tempArr.splice((tempArr.indexOf(pastSearch)), 1)
                                localStorage.setItem('pastSearchList', JSON.stringify([...tempArr]))
                                setPastSearchListDeleted([...tempArr])
                            }} // Whenever clicked 'x', delete one from the list
                                className="material-icons-outlined">
                                close
                            </span>
                        </div>
                    )
                })}
            </>) : ""}
        </div>
    </>
}
