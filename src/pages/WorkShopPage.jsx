import React from 'react'
import Header from '../components/header'
import '../styles/WorkShop.css'

const WorkShopPage = () => {

  const locations = [
    {
      name: 'Ю.Р.К.',
      street: 'Богдана Хмельницького, 228, Львів, Львівська область, 79037',
      link: 'https://maps.app.goo.gl/j65jPpBtwgGRDtNm8',
      img: '/images/store1.png'
    },
    {
      name: 'RENAULT (Рено) Львів - Галич-Моторс',
      street: 'Зелена, 407, Львів, Львівська область, 79000',
      link: 'https://www.google.com/maps/place/Рено+Львів+-+офіційний+дилер',
      img: '/images/store2.png'
    }
  ];

  return (
    <div>
      <Header />
      <div className="representatives">
        <h1>Our representatives</h1>
        <ul>
          {locations.map((item) => (
            <li key={item.name}>
              <div className="representative-info">
                <div className="representative-name">Representative name: {item.name}</div>
                <div className="street"><b>The street:</b>{item.street}</div>
                <div className="google-link"><b>Google maps link:</b> <a href={item.link}>{item.name}</a></div>
                {item.img && <img src={item.img} alt={item.name} className="representative-img" />}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default WorkShopPage
