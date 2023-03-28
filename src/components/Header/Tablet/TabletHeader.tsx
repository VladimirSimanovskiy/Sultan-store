import React, {useState } from 'react'
import logo from './icons/Logo.svg'
import basket from './icons/basket.svg'
import catalog from './icons/catalog_icon.svg'
import search from './icons/search_icon.svg';
import TabletMenu from './TabletMenu';

const TabletHeader = () => {


  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className='tablet_header'>
      <div className='tablet_header_top'>
        <div className='round_btn'>
          <button id="burger_button" 
                  className={menuActive ? 'burger_button clicked' : 'burger_button'} 
                  type="button" 
                  onClick={() => setMenuActive(!menuActive)}>
            <span></span>
          </button>
        </div>
        <img className='tablet_logo' src={logo} alt="" />
        <div className='basket_icon'>
          <img src={basket} alt="basket_icon" />
          <span>3</span>
        </div>
      </div>

      <div className='tablet_header_second'>
        <div className="right_container">
          <a className='tablet_catalog' href="#catalog">
           <img src={catalog} alt="catalog icon" />
           <p>Каталог</p>
          </a>
        </div>
        <div className='left_container'>
          <form className='tablet_search' action="/" method='get'>
            <button><img src={search} alt="search icon" /></button>
            <input type="text" placeholder='Поиск'/>
          </form>
        </div>
      </div>

      <TabletMenu active={menuActive} setActive={setMenuActive}/>



    </div>
  )
}

export default TabletHeader