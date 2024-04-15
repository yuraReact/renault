import React from 'react'
import Header from '../components/header'
import '../styles/Assistance.css'

const AssistancePage = () => {

  const handleClick = () => {
    return prompt("Введіть свій номер телефону")
  }

  return (
    <div>
      <Header />
      <div className="assistance">
        <h2>RENAULT ASSISTANCE ТА ASSISTANCE +</h2>
        <p>Ваша цілодобова підтримка: <a href="tel:0-800-500-351">0 800 500 351</a></p>
        <h3>RENAULT ASSISTANCE</h3>
        <p className='mt'>Це програма цілодобової технічної допомоги на дорозі для водіїв автомобілів за умовами контрактної гарантії строком у 3 роки або 100 тис. км.</p>
        <p>Власник гарантійного автомобіля RENAULT може скористатися цією послугою безкоштовно, цілодобово, на всій території України (окрім територій, на яких органи державної влади тимчасово не здійснюють в повному обсязі свої повноваження) за телефоном <a href="tel:0-800-500-351">0 800 500 351</a>.</p>
        <h4>ПОСЛУГИ ЗА ПРОГРАМОЮ RENAULT ASSISTANCE:</h4>
        <div className="service-container">
          <button className="service-btn" onClick={handleClick}>Евакуація автомобіля</button>
          <button className="service-btn" onClick={handleClick}>Підзарядка акумуляторної батареї</button>
          <button className="service-btn" onClick={handleClick}>Доставка пального</button>
        </div>
      </div>

    </div>
  )
}

export default AssistancePage
