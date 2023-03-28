import React from 'react'
import geo from './icons/geo.svg'
import mail from './icons/mail.svg'

const FullscreenTopline = () => {
  return (
    <div className='topline'>

      <div className="adress_container">
        <div className='adress_item'>
          <img className='adress_icon' src={geo} alt="" />
          <div className='adress_name'>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <p>(Рынок Восточный)</p>
          </div>
        </div>
        <div className='adress_item'>
          <img className='adress_icon' src={mail} alt="" />
          <div className='adress_name'>
            <h4>opt.sultan@mail.ru</h4>
            <p>На связи в любое время</p>
          </div>
        </div>
      </div>

      <div className='topline_right'>
        <nav className='nav'>
          <ul className='nav_list'>
            <li>
              <a className='nav_link' href="#">О компании</a>
            </li>
            <li>
              <a className='nav_link' href="#">Доставка и оплата</a>
            </li>
            <li>
              <a className='nav_link' href="#">Возврат</a>
            </li>
            <li>
              <a className='nav_link' href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default FullscreenTopline