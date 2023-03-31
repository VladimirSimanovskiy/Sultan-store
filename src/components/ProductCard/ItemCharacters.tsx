import React from 'react'
import { IProduct } from '../../models/models'

const ItemCharacters = ({item}: {item: IProduct}) => {

  console.log(item)
  return (
    <div className='item_characters_container'>

      <div className="characters_row">
        <p className="characters_name">Производитель:</p>
        <p className="characters_value">{item.producer}</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Брэнд:</p>
        <p className="characters_value">{item.brand}</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Артикул:</p>
        <p className="characters_value">4600404</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Кол-во в  коробке:</p>
        <p className="characters_value">2</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Штрихкод:</p>
        <p className="characters_value">{item.barcode}</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Размер коробки(д.ш.в.):</p>
        <p className="characters_value">10x10x10</p>
      </div>

      <div className="characters_row">
        <p className="characters_name">Вес коробки:</p>
        <p className="characters_value">1000 г</p>
      </div>

    </div>
  )
}

export default ItemCharacters