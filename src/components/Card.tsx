import React from 'react'

// components
import Path from './Path'
import ItemCharacters from './ProductCard/ItemCharacters'
import DropDownCharacters from './ProductCard/DropDownCharacters'

//react
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addToBasket, removeOneFromBasket, removeAllFromBasket } from '../store/slices/basketSlice'

//icons
import box from './icons/box_icon.svg'
import bottle from './icons/bottle_icon.svg'
import basket from './Main/icons/btn_basket.svg'
import share from './icons/ci_share.svg'
import download from './icons/download_grey.svg'

// functions
import { getLocalStorageItems } from '../functions/getLocalStorageItems'

// interfaces
import { IProduct } from '../models/models'

const Card = () => {

  const dispatch = useDispatch()
  const params = useParams<'id'>()

  const itemID = Number(params.id)

  const basketItems = useSelector((state: RootState) => state.basketSlice.items)
  const itemFromBasket = basketItems.find(item => item.item.id === itemID)

  let products: IProduct[] = getLocalStorageItems()

  const itemFromCatalog = products.filter((item: { id: number }) => item.id === itemID)[0]

  const props = {
    sectionName: itemFromCatalog.name,
    pathName: 'Каталог товаров',
    linkName: '/'
  }

  const size_units = (itemFromCatalog.size_type === 'вес') ? 'г' : 'мл'
  const price = String(itemFromCatalog.price).replace('.', ',')
  const size_icon = (itemFromCatalog.size_type === 'вес') ? box : bottle

  function removeAllItems(selectedItem: IProduct) {
    if (itemFromBasket) {
      const payloadItemCounter = {
        itemCount: itemFromBasket.itemCount,
        item: selectedItem
      }
  
      dispatch(removeAllFromBasket(payloadItemCounter))
    }
  }

  function removeOneItem(selectedItem: IProduct) {
    if (!itemFromBasket) return
    if (itemFromBasket.itemCount === 1) {
      removeAllItems(selectedItem)
    } else {
      dispatch(removeOneFromBasket(selectedItem))
    }
  }

  return (
    <main>
      <Path props={props}/>
      <div className="card_container">
        <img className='card_img' src={itemFromCatalog.URL} alt="product_img" />
        <div className="card_porduct_characters">
          <p className="vailability">В наличии</p>
          <p className="product_name card"><b className='brand card'>{itemFromCatalog.brand}</b> {itemFromCatalog.name}</p>
          <div className="product_size">
            <img src={size_icon} alt="" className="size_icon" />
            <p className='size_value'>{itemFromCatalog.size} {size_units}</p>
          </div>
          <div className="card_line_container">
            <div className="card_line_column">
              <span className="price">{price}</span>
            </div>

            <div className="card_line_column">
              <button className='counter_btn'
                      onClick={() => removeOneItem(itemFromCatalog)}
              >
                -
              </button>
                <span className='count'>{itemFromBasket ? itemFromBasket.itemCount : 0}</span>
              <button className='counter_btn'
                      onClick={() => dispatch(addToBasket(itemFromCatalog))}
              >
                +
              </button>
            </div>

            <div className="card_line_column fullscreen">
              <button className='btn basket_btn card_basket_btn'
                      onClick={() => dispatch(addToBasket(itemFromCatalog))}
              >
                <div className='btn_container'>
                  <p className='basket_txt'>в корзину</p>
                  <img src={basket} alt="download" />
                </div>
              </button>
            </div>

        </div>

        <div className="card_line_container fullscreen">

          <div className="shadow_block btn_block">
            <img src={share} alt="share_icon" />
          </div>

          <div className="shadow_block">
            <p className='delivery'>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</p>
          </div>

          <div className="shadow_block btn_block">
            <div className="btn__card_container">
              <p className='btn_card_text'>Прайс-лист</p>
              <img src={download} alt="download_icon" />

            </div>
          </div>

        </div>

        <div className="card_line_container tablet gap">
          <button className='btn basket_btn card_basket_btn'
                  onClick={() => dispatch(addToBasket(itemFromCatalog))}
          >
            <div className='btn_container'>
              <p className='basket_txt'>в корзину</p>
              <img src={basket} alt="download" />
             </div>
          </button>

          <div className="btn_block">
            <img src={share} alt="share_icon" />
          </div>
        </div>

        <div className="card_line_container tablet">
          <div className="shadow_block">
            <p className='delivery'>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</p>
          </div>
        </div>

        <div className="card_line_container tablet">
          <div className="shadow_block btn_block">
            <div className="btn__card_container">
              <p className='btn_card_text'>Прайс-лист</p>
              <img src={download} alt="download_icon" />
            </div>
          </div>
        </div>

        <ItemCharacters item={itemFromCatalog} />
        <DropDownCharacters item={itemFromCatalog} />
        </div>
      </div>

    </main>

  )
}

export default Card