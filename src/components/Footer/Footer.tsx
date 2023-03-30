import React from 'react'
import footerLogo from './icons/footer_logo.svg'
import arrow from './icons/subscribe_arrow.svg'
import download from './icons/download.svg'
import whatsApp from './icons/whatsApp_icon.svg'
import telegram from './icons/logos_telegram.svg'
import visa from './icons/Visa.svg'
import masterCrad from './icons/MasterCard.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_container">

        <div className="logo_column">
          <img src={footerLogo} alt="footer_logo" />
          <p className='logo_column_text'>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
          <form className='subscribe_form' action="/">
            <p className='subscribe_title'>Подпишись на скидки и акции</p>
            <input 
              className='subscribe_input'
              placeholder='Введите ваш E-Mail'
              type="email" />
            <button className='subscribe_btn'>
              <img src={arrow} alt="" />
            </button>
          </form>
        </div>

        <div className="footer_grid">
          <div className="footer_list grid_column">
            <h1 className="footer_list_title">Меню сайта:</h1>
            <ul>
              <li><a className='footer_link' href="#">О компании</a></li>
              <li><a className='footer_link' href="#">Доставка и оплата</a></li>
              <li><a className='footer_link' href="#">Возврат</a></li>
              <li><a className='footer_link' href="#">Контакты</a></li>
            </ul>
          </div>

          <div className="footer_list grid_column">
            <h1 className="footer_list_title">Категории:</h1>
            <ul>
              <li><a className='footer_link' href="#">Бытовая химия</a></li>
              <li><a className='footer_link' href="#">Косметика и гигиена</a></li>
              <li><a className='footer_link' href="#">Товары для дома</a></li>
              <li><a className='footer_link' href="#">Товары для детей и мам</a></li>
              <li><a className='footer_link' href="#">Посуда</a></li>
            </ul>
          </div>

          
          <div className="footer_contacts_column grid_column widest">
            <h1 className="footer_list_title">Скачать прайс-лист:</h1>
            <button className='btn footer_btn'>
            <div className='btn_container'>
              <p>Прайс-лист</p>
              <img src={download} alt="download" />
            </div>
            </button>
            <p>Связь в мессенджерах:</p>
            <div className="social_media">
              <img className='social_media_logo' src={whatsApp} alt=" whatsApp_logo" />
              <img className='social_media_logo' src={telegram} alt=" telegram_logo" />
            </div>
          </div>

          <div className="footer_contacts_column grid_column">
            <h1 className="footer_list_title">Контакты:</h1>

            <div className='footer_adress_item'>
              <div className='footer_adress_name'>
                <h4>+7 (777) 490-00-91</h4>
                <p>время работы: 9:00-20:00</p>
                <a href="#">Заказать звонок</a>
              </div>
            </div>

            <div className='footer_adress_item'>
              <div className='footer_adress_name'>
                <h4>opt.sultan@mail.ru</h4>
                <p>На связи в любое время</p>
              </div>
            </div>

            <div className='social_media'>
              <img className='social_media_logo' src={visa} alt="visa_logo" />
              <img src={masterCrad} alt="masterCard_logo" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer