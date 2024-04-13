import React from 'react';
import "../styles/ModelsPage.css"
import Header from '../components/header';

const ModelsPage = () => {
  const carModels = [
    { name: 'Duster', image: '/images/dust01.png', engine: '1.5 dci', gearbox: 'MT', additional: '/images/4wd.png' },
    { name: 'Express', image: '/images/exp02.png', engine: '1.5 dci', gearbox: 'MT', additional: '/images/furgon.png' },
    { name: 'Koleos', image: '/images/kol03.png', engine: '2.0 tce', gearbox: 'AMT(CVT)', additional: '/images/4wd.png' }
  ];

  return (
    <div className="models-page-container">
      <Header />
      <div className='card-container'>
        {carModels.map((model, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={model.image} alt={model.name} />
            <div className='card-title'>
              <h3>{model.name}</h3>
            </div>
            <div className='under'>
              <div className='eco'>
                <img src='/images/eco2.png' />
              </div>
              <div className='add'>
                <img width={35} height={30} src={model.additional} />
              </div>
            </div>

            <div className='description'>
              <div className='engine'>
              <img src='/images/engineLogo.png'/>
              <p>{model.engine}</p>
              </div>
              <div className='gear'>
              <img src='/images/gearboxLogo.png'/>
              <p>{model.gearbox}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
