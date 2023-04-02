import React from 'react'
import bottle from './icons/bottle_icon.svg'
import box from './icons/box_icon.svg'
import basket from './Main/icons/btn_basket.svg'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../store/slices/basketSlice'
import { useNavigate } from 'react-router-dom'

interface IProduct {
  key: number,
  id: number,
  URL: string,
  name: string,
  size_type: string,
  size: number,
  barcode: number,
  producer: string,
  brand: string,
  description: string,
  price: number,
  types: string[]
}

const Product = (props: IProduct) => {

  const size_icon = (props.size_type === 'вес') ? box : bottle
  const size_units = (props.size_type === 'вес') ? 'г' : 'мл'
  const price = String(props.price).replace('.', ',')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const clickHandler = () => navigate(`/catalog/${props.id}`)
  

  return (
    <div className='product_item'>
      <div className="product_img">
        <img src={require(`../..${props.URL}`)} alt="product_img" />
      </div>
      <div className="product_size">
        <img src={size_icon} alt="" className="size_icon" />
        <p className='size_value'>{props.size} {size_units}</p>
      </div>
      <p className="product_name" onClick={clickHandler}><b className='brand'>{props.brand}</b> {props.name}</p>
      <div className="product_characters">
        <div className="character_row">
          <p className="params">Штрихкод:</p>
          <p className='params_value'>{props.barcode}</p>
        </div>
        <div className="character_row">
          <p className="params">Производитель:</p>
          <p className='params_value'>{props.producer}</p>
        </div>
        <div className="character_row">
          <p className="params">Брэнд:</p>
          <p className='params_value'><b className='brand character'>{props.brand}</b></p>
        </div>
        <div className="character_row">
          <p className="params">Тип <br/> ухода:</p>
          <p className='params_value'>{props.types.join(', ')}</p>
        </div>
        <div className="product_footer">
          <span className="price">{price}</span>
          <button className='btn basket_btn'
                  onClick={() => dispatch(addToBasket(props))}
          >
            <div className='btn_container'>
              <p className='basket_txt'>в корзину</p>
              <img src={basket} alt="download" />
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Product