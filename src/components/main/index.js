import React, { useState } from 'react';
import styles from './main.module.css';
import { Link } from 'react-router-dom';
import ModelsPage from '../../pages/ModelsPage';

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
    let carMore;
    switch (backgroundType) {
        case 1:
            backgroundClass = styles.dusterBackground;
            carTitle = "Renault Duster";
            carSlogan = "Life-is an unknown road";
            carMore = 'https://renault-duster.infocar.ua/duster_id5473.html'
            break;
        case 2:
            backgroundClass = styles.koleosBackground;
            carTitle = "Renault Koleos";
            carSlogan = "Feel the power";
            carMore = "https://renault-koleos.infocar.ua/koleos_id6006.html"
            break;
        case 3:
            backgroundClass = styles.expressBackground;
            carTitle = "Renault Express";
            carSlogan = "Large trunk";
            carMore ="https://renault-express.infocar.ua/mod_1.5-dci-mt-zen_express_id6570.html"
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
                    <a href={carMore} className={styles.btn}>learn more</a>
                </div>
                <button className={styles.togglebtn} onClick={changeBackground}>➩</button>
                
            </div>
        </div>
    );
}

export default Main;
