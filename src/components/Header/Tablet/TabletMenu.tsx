import React, { useState } from 'react'
import geo from "./icons/geo.svg";
import mail from "./icons/mail.svg";
import phone from './icons/phone_icon.svg';
import whitePhone from './icons/carbon_phone-filled.svg'
import Admin from '../../Admin/Admin';

interface Tablet {
  active: boolean,
  setActive: any
}

const TabletMenu = ({active, setActive}: Tablet) => {

  const [showAdmin, setShowAdmin] = useState(false)

  const closeAdmin = () => {
    setShowAdmin(false)
  }

  function openAdmin() {
    setShowAdmin(true)
  }
  
  return (
    <div className={active ? 'menu_mask clicked' : 'menu_mask'}
         onClick={() => setActive(false)}>
        <div className={active ? 'tablet_menu active' : 'tablet_menu'}
             onClick={e => e.stopPropagation()}>
          <div className="tablet_contacts">
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
            <div className='adress_item'>
              <img className='adress_icon' src={phone} alt="" />
              <div className='adress_name'>
                <h4>Отдел продаж</h4>
                <p>+7 (777) 490-00-91</p>
              </div>
            </div>
            
            <p className='working_hours'>время работы: 9:00-20:00</p>

            <div className="call_order">
              <div className="round_btn">
                <img className='centre_icon' src={whitePhone} alt="phone_icon" />
              </div>
              <a className='call_link' href="#"><p>Заказать звонок</p></a>
            </div>
          </div>


          <h1 className='menu_title'>Меню сайта:</h1>
          <nav className='tablet_nav'>
            <ul className='tablet_nav_list'>
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

          <button className='btn'>
            <div className='btn_container'
                 onClick={() => openAdmin()}>
              <p>Админ панель</p>
            </div>
          </button>
      </div>

      <Admin active={showAdmin} onClose={closeAdmin} />
    </div>

  )
}

export default TabletMenu