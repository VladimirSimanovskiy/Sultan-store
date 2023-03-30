import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearBasket } from '../../store/slices/basketSlice'
import Path from '../Path'
import BasketItem from './BasketItem'
import { RootState } from '../../store/store'
import Modal from './Modal'
import emptyBasket from '../Basket/img/empty_basket.png'
import { Link } from 'react-router-dom'


const Basket = () => {

  const dispatch = useDispatch()

  const selectedItems = useSelector((state: RootState) => state.basketSlice.items)
  const totalPrice = useSelector((state: RootState) => state.basketSlice.totalPrice)
  const totalItems = useSelector((state: RootState) => state.basketSlice.totalItems)

  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  function checkout() {
    setShowModal(true)
    dispatch(clearBasket())
  }

  const props = {
    sectionName: 'Корзина',
  }

  
  return (
    <main>
      <Path props={props} />
      <div className='basket_container'>
        <h1 className="main_title">корзина</h1>

          <div className= {totalItems === 0 ? "empty_basket_container active" : "empty_basket_container"}>
          <h1 className='empty_title'>Ваша корзина пуста</h1>
          <img className='empty_basket_img' src={emptyBasket} alt="empty_basket_img" />
          <Link to='/'>
            <button className="btn catalog_btn">
              <div className="btn_container">
                <p>Перейти в каталог</p>
              </div>
            </button>
          </Link>
        </div>

        <div className="basket_products_container">
          {
            selectedItems.map((obj) => (
              <BasketItem {...obj} /> 
          ))}
        </div>

        <div className={totalItems === 0 ? "basket_footer not_active" : "basket_footer"}>
          <button className="btn"
                  onClick={() => checkout()}
          >
            <div className="btn_container">
              <p>Оформить заказ</p>
            </div>
          </button>
          <p className="basket_total_price">{totalPrice.toFixed(2)} ₸</p>
        </div>
      </div>
      <Modal active={showModal} onClose={closeModal}/>
    </main>
  )
}

export default Basket