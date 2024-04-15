import React from 'react';
import "../styles/RenaultSport.css"; 
import Header from '../components/header';

const RenaultSportPage = () => {
 const rs = [
  {model: "Megane RS", image: "/images/megrs.png", "0-100km/h": 5.7 },
  {model: "Clio RS", image: "/images/cliors.png", "0-100km/h": 5.8}
 ];

  return (
    <div>
      <Header />
        <div className="renault-sport-page-container">
          <div className="renault-sport-page-content">
            <h1 className="renault-sport-page-title">Renault Sport</h1>
            <p className="renault-sport-page-text">
              Renault Sport є підрозділом компанії Renault, який відповідає за розробку та виробництво спортивних автомобілів.
              Відомість компанії забезпечує велике зацікавлення в технологіях, що застосовуються в автомобільному спорті,
              та випускає такі автомобілі, як Renault Clio RS, Renault Megane RS та інші.
            </p>
            <p className="renault-sport-page-text">
              Дізнатися більше про моделі Renault Sport можна на <a href="#" className="renault-sport-page-link">офіційному веб-сайті</a>.
            </p>
          </div>
        </div>
    <div className='rs-cards'>
      {rs.map((vehicle, index) => (
        <div className='rs-card' key={index}>
          <img src={vehicle.image} alt={vehicle.model} />
          <h3>{vehicle.model}</h3>
          <p>0-100 km/h: {vehicle["0-100km/h"]} sec</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RenaultSportPage;
