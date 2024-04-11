import React from 'react';
import styles from './main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <div className={styles.container}>
                    <h1>Renault Duster</h1>
                    <h3>Life-is an unknown road</h3>
                    <button className={styles.btn}>learn more</button>
                </div>
                
            </div>
        </div>
    );
}

export default Main;
