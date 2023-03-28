import React from 'react'
import logo from './icons/Logo.svg'
import catalogIcon from './icons/tile.svg'
import loupe from './icons/loupe.svg'
import download from './icons/download.svg'
import manager from './icons/manager.svg'
import basket from './icons/basket.svg'

const FullscreenSecondline = () => {
  return (
    <div className='secondline_container'>
      <div className='headerlogo'>
        <a href="/" className='headerlogo_link'>
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <a href="#" className='btn'>
        <div className='btn_container'>
          <p>Каталог</p>
          <img src={catalogIcon} alt="catalog" />      
        </div>
      </a>

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

      <a href="#" className='btn'>
        <div className='btn_container'>
          <p>Прайс-лист</p>
          <img src={download} alt="download" />      
        </div>
      </a>

      <div className='header_basket'>
        <div className='basket_icon'>
          <img src={basket} alt="basket_icon" />
          <span>3</span>
        </div>
        <div className='total_price'>
          <p>Корзина</p>
          <span className='price'>12 478</span>
        </div>

      </div>

    </div>
  )
}

export default FullscreenSecondline