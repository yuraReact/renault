import React from 'react'
import styles from './navButtons.module.css'

const NavButtons = () => {
    return (
        <div className={styles.bar}>
            <button className={styles.pricelistsbtn}>Price-lists</button>
            <button className={styles.servicebtn}>Service</button>
            <button className={styles.connectionbtn}>Connection with dealer</button>
            <button className={styles.warehousebtn}>Online warehouse</button>
        </div>
    )
}

export default NavButtons;
