import React from 'react';
import "../styles/ModelsPage.css"
import Header from '../components/header';

const ModelsPage = () => {
  const carModels = [
    { name: 'Duster', image: '/images/dust01.png' },
    { name: 'Express', image: '/images/exp02.png' },
    { name: 'Koleos', image: '/images/kol03.png' }
  ];

  return (
    <div className="models-page-container"> {/* Контейнер для центрирования */}
      <Header />
      <div className='card-container'> {/* Контейнер для карточек */}
        {carModels.map((model, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={model.image} alt={model.name} />
            <div className='card-title'>
              <h3>{model.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
