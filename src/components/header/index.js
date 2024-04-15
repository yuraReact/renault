import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img width={110} height={80} src='./images/main.png' alt="Main Logo" />
                </Link>            </div>
            <div className={styles.navigation}>
                <nav>
                    <Link to="/models" className={styles.modelsbtn}>Models</Link>
                    <Link to="/workshop" className={styles.workshopbtn}>Workshop and Maintenance</Link>
                    <Link to="/assistance" className={styles.fanshopbtn}>Renault Assistance</Link>
                    <Link to="/rs" className={styles.renaultsportbtn}>Renault Sport</Link>
                </nav>
                <div >
                    <a href='https://www.instagram.com/renault_ukraine/'><img src='./images/insta.png' className={styles.insta}></img></a>
                    <a href='https://www.facebook.com/terkorenault'><img src='./images/facebook.png' className={styles.facebook}></img></a>
                </div>
            </div>
        </header>
    )
}

export default Header;
