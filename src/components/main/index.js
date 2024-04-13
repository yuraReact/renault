import React, { useState } from 'react';
import styles from './main.module.css';

const Main = () => {
    const [backgroundType, setBackgroundType] = useState(1);

    const changeBackground = () => {
        setBackgroundType(prevType => {
            if (prevType === 1) return 2;
            if (prevType === 2) return 3;
            return 1;
        });
    };

    let backgroundClass;
    let carTitle;
    let carSlogan;
    switch (backgroundType) {
        case 1:
            backgroundClass = styles.dusterBackground;
            carTitle = "Renault Duster";
            carSlogan = "Life-is an unknown road"
            break;
        case 2:
            backgroundClass = styles.koleosBackground;
            carTitle = "Renault Koleos";
            carSlogan = "Feel the power"
            break;
        case 3:
            backgroundClass = styles.expressBackground;
            carTitle = "Renault Trafic";
            carSlogan = "Large trunk"
            break;
        default:
            backgroundClass = '';
            carTitle = "Renault Duster";
    }

    return (
        <div className={`${styles.main} ${backgroundClass}`}>
            <div className={styles.block}>
                <div className={styles.container}>
                    <h1>{carTitle}</h1>
                    <h3>{carSlogan}</h3>
                    <button className={styles.btn}>learn more</button>
                </div>
                <button className={styles.togglebtn} onClick={changeBackground}>➩</button>
                
            </div>
        </div>
    );
}

export default Main;
