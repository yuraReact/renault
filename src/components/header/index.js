import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img width={110} height={80} src='./images/main.png'></img>
            </div>
            <div className={styles.navigation}>
                <nav>
                    <button className={styles.modelsbtn}>Models</button>
                    <button className={styles.workshopbtn}>Workshop and Maintenance</button>
                    <button className={styles.fanshopbtn}>Fan Shop</button>
                    <button className={styles.renaultsportbtn}>Renault Sport</button>
                </nav>
                <div >
                    <input className={styles.search} placeholder='Search'></input>
                </div>
            </div>
        </header>
    )
}

export default Header;
