import React, { useState } from 'react'
import { IProduct } from '../../models/models'

const DropDownCharacters = ({item}: {item: IProduct}) => {

  const [activeDescription, setActiveDescription] = useState(false)
  const [activeCharacters, setActiveCharacters] = useState(false)

  return (
    <>
      <div className='drop-down_container'>
        <h1 className="drop-down_title"
            data-testid='description_title'
            onClick={() => setActiveDescription(!activeDescription)}
        >
          Описание {activeDescription ? '▲' : '▼'}
        </h1>
        {activeDescription &&
            <div className={"drop-down_characters active"}
                data-testid='test_description'>
            <p className="drop-down_description">{item.description}</p>
          </div>
        }

      </div>

      <div className='drop-down_container lower'>
        <h1 className="drop-down_title"
            data-testid='characters_title'
            onClick={() => setActiveCharacters(!activeCharacters)}
        >
          Характеристики {activeCharacters ? '▲' : '▼'}
        </h1>
        {activeCharacters &&
          <div className={"drop-down_characters active"}
          data-testid='test_characters'>
          <div className='item_characters_container'>

          <div className="characters_row">
            <p className="characters_name">Производитель:</p>
            <p className="characters_value">{item.producer}</p>
          </div>

          <div className="characters_row">
            <p className="characters_name">Бренд:</p>
            <p className="characters_value">{item.brand}</p>
          </div>

          <div className="characters_row">
            <p className="characters_name">{item.size_type[0].toUpperCase() + item.size_type.slice(1)}:</p>
            <p className="characters_value">{item.size} {item.size_type === 'вес' ? 'г' : 'мл'}</p>
          </div>

          <div className="characters_row">
            <p className="characters_name">Штрихкод:</p>
            <p className="characters_value">{item.barcode}</p>
          </div>

          <div className="characters_row">
            <p className="characters_name">Типы ухода:</p>
            <p className="characters_value">{item.types.join(', ')}</p>
          </div>

          </div>
        </div>
        }

      </div>
    </>

  )
}

export default DropDownCharacters