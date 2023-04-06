import React, {useState } from 'react'
import logo from './icons/Logo.svg'
import basket from './icons/basket.svg'
import catalog from './icons/catalog_icon.svg'
import search from './icons/search_icon.svg';
import TabletMenu from './TabletMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';

const TabletHeader = () => {


  const [menuActive, setMenuActive] = useState(false);
  const totalItems = useSelector((state: RootState) => state.basketSlice.totalItems)

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
        
        <Link to='/'>
          <img className='tablet_logo' src={logo} alt="logo" />
        </Link>

        <Link className='basket_icon' 
              to='/basket'
              onClick={() => window.scrollTo(0, 0)}>
          <img src={basket} alt="basket_icon" />
          <span>{totalItems}</span>
        </Link>
      </div>

      <div className='tablet_header_second'>
        <div className="right_container">
          <Link className='tablet_catalog' to='/'>
           <img src={catalog} alt="catalog icon" />
           <p>Каталог</p>
          </Link>
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