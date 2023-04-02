import React, { useState } from 'react'
import logo from './icons/Logo.svg'
import catalogIcon from './icons/tile.svg'
import loupe from './icons/loupe.svg'
import download from './icons/download.svg'
import manager from './icons/manager.svg'
import basket from './icons/basket.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Link } from 'react-router-dom'
import Admin from '../../Admin/Admin'

const FullscreenSecondline = () => {

  const totalPrice = useSelector((state: RootState) => state.basketSlice.totalPrice)
  const totalItems = useSelector((state: RootState) => state.basketSlice.totalItems)

  const [showAdmin, setShowAdmin] = useState(false)

  const closeAdmin = () => {
    setShowAdmin(false)
  }

  function openAdmin() {
    setShowAdmin(true)
  }

  return (
    <div className='secondline_container'>
      <div className='headerlogo'>
        <a href="/" className='headerlogo_link'>
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <Link to="/" className='btn'>
        <div className='btn_container'>
          <p>Каталог</p>
          <img src={catalogIcon} alt="catalog" />      
        </div>
      </Link>

      <form className='search' action='/' method='get'>
        <input className='search_input' type="text" placeholder='Поиск...'/>
        <button className='search_btn'>
          <img src={loupe} alt="" />
        </button>
      </form>

      <div className='header_contacts'>
        <div className='contacts'>
          <h4>+7 (777) 490-00-91</h4>
          <p>время работы: 9:00-20:00</p>
          <a className='call_link' href="#"><p>Заказать звонок</p></a>
        </div>
        <img src={manager} alt="manager_img" />
      </div>

      <button className='btn'
              onClick={() => openAdmin()}>
        <div className='btn_container'>
          <p>Админ панель</p>
        </div>
      </button>

      <div className='header_basket'>
        <Link to="/basket">
          <div className='basket_icon'>
            <img src={basket} alt="basket_icon" />
            <span>{totalItems}</span>
          </div>
          <div className='total_price'>
            <p>Корзина</p>
            <span className='price'>{totalPrice.toFixed(2)}</span>
          </div>
        </Link>
      </div>

      <Admin active={showAdmin} onClose={closeAdmin} />

    </div>
  )
}

export default FullscreenSecondline