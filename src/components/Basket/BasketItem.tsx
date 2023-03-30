import React from 'react'
import bottle from '../icons/bottle_icon.svg'
import box from '../icons/box_icon.svg'
import grab from '../icons/delete.svg'
import { IItemsCounter, IProduct } from '../../models/models'
import { useDispatch } from 'react-redux'
import { addToBasket, removeAllFromBasket, removeOneFromBasket } from '../../store/slices/basketSlice'

const BasketItem = (item: IItemsCounter) => {

  const dispatch = useDispatch()

  const selectedItem = item.item

  const size_icon = (selectedItem.size_type === 'вес') ? box : bottle
  const size_units = (selectedItem.size_type === 'вес') ? 'г' : 'мл'

  function removeAllItems(selectedItem: IProduct) {
    const payloadItemCounter = {
      itemCount: item.itemCount,
      item: selectedItem
    }

    dispatch(removeAllFromBasket(payloadItemCounter))
  }

  function removeOneItem(selectedItem: IProduct) {
    if (item.itemCount === 1) {
      removeAllItems(selectedItem)
    } else {
      dispatch(removeOneFromBasket(selectedItem))
    }
  }

  return (
    <div className="selected_product">
      <div className="left_basket_flex">

        <img className='selected_product_img' src={selectedItem.URL} alt="product_img" />
        <div className="product_info">
          <div className="product_size">
            <img src={size_icon} alt="" className="size_icon" />
            <p className='size_value'>{selectedItem.size} {size_units}</p>
          </div>
          <p className="product_name basket"><b className='brand'>{selectedItem.brand}</b> {selectedItem.name}</p>
          <p className="product_description">{selectedItem.description}</p>
        </div>

      </div>

      <div className="right_basket_flex">
        <div className="right_basket_column">
          <button className='counter_btn'
                  onClick={() => removeOneItem(selectedItem)}
          >
            -
          </button>
            <span>{item.itemCount}</span>
          <button className='counter_btn'
                  onClick={() => dispatch(addToBasket(selectedItem))}
          >
            +
          </button>
        </div>

        <div className="right_basket_column">
          <p className="basket_price">{selectedItem.price} ₸</p>
        </div>

        <div className="right_basket_column">
          <button className='grab_btn'
                  onClick={() => removeAllItems(selectedItem)}
          >
            <img src={grab} alt="delete_icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BasketItem