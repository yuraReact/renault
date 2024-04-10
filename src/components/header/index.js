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
                    <button>Models</button>
                    <button>Workshop and Maintance</button>
                    <button>Fan shop</button>
                    <button>Renault sport</button>
                </nav>
                <div >
                   <input className={styles.search} placeholder='Search'></input>
                </div>
            </div>
        </header>
    )
}

export default Header;
