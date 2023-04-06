// images
import logo from './icons/Logo.svg'
import catalogIcon from './icons/tile.svg'
import loupe from './icons/loupe.svg'
import manager from './icons/manager.svg'
import basket from './icons/basket.svg'

// states
import { toggleAdmin } from '../../../store/slices/modalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store'

// components
import Admin from '../../Admin/Admin'
import { Link } from 'react-router-dom'

const FullscreenSecondline = () => {

  const totalPrice = useSelector((state: RootState) => state.basketSlice.totalPrice)
  const totalItems = useSelector((state: RootState) => state.basketSlice.totalItems)
  const showAdmin = useSelector((state: RootState) => state.modalSlice.showAdmin)

  const dispatch = useDispatch()

  return (
    <div className='secondline_container'>
      <div className='headerlogo'>
        <Link to="/" className='headerlogo_link'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <Link to="/" className='btn'
            onClick={() => window.scrollTo(0, 0)}>
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
          <a href='/#' className='call_link'><p>Заказать звонок</p></a>
        </div>
        <img src={manager} alt="manager_img" />
      </div>

      <button className='btn'
              onClick={() => dispatch(toggleAdmin())}>
        <div className='btn_container'>
          <p>Админ панель</p>
        </div>
      </button>

      <div className='header_basket'>
        <Link to="/basket"
              onClick={() => window.scrollTo(0, 0)}>
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

      <Admin active={showAdmin} onClose={() => dispatch(toggleAdmin())} />

    </div>
  )
}

export default FullscreenSecondline