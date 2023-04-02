import React, { useState } from 'react'
import { IProduct } from '../../models/models';
import TextareaAutosize from 'react-textarea-autosize';
import { MultiSelect } from 'react-multi-select-component';

// functions
import { handleNumberInput } from '../../functions/handleNumberInput';

const RemoveTab = ({active}: {active: boolean}) => {

  const products: any = []

  for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    const item = localStorage.getItem(key)

    if (typeof item === 'string') {
      products.push(JSON.parse(item))
    }
  }

  const barcodesList: number[] = products.map((item: IProduct) => item.barcode.toString())

  
    // Values states
    const [barcode, setBarcode] = useState('')
    
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [producer, setProducer] = useState('')
    const [URL, setURL] = useState('')
    const [sizeType, setSizeType] = useState('объем')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [types, setTypes] = useState<SelectValue[]>([])

    const [showCard, setShowCard] = useState(false)

    // Types array
    type SelectValue = { value: string; label: string; }

    // get item to localStorage
    let item: IProduct
    let localStorageItem 
    let size_units

    const getItem = (value: string) => {
      if (value === '') setShowCard(false)
      setBarcode(value)
      setShowCard(true)

      localStorageItem = localStorage.getItem(value)

      if (typeof localStorageItem === 'string') {
        item = JSON.parse(localStorageItem)

        types.length = 0

        setName(item.name)
        setBrand(item.brand)
        setProducer(item.producer)
        setURL(item.URL)
        setSizeType(item.size_type)
        setSize(item.size.toString())
        setPrice(item.price.toString())
        setDescription(item.description)
        for (let type of item.types) {
          types.push({ value: type.toLowerCase(), label: type },)
        }
      }


    }

    // remove item from JSON
    const removeItem = (event: React.FormEvent<HTMLFormElement>) => {

      setBarcode('')
      setShowCard(false)

      if (localStorage.getItem(barcode.toString()) !== null) {
        localStorage.removeItem(barcode.toString())
      }
    }

  return (
    <div className={active ? 'tab_container active' : 'tab_container'}>
    <form 
      onSubmit={(event) => removeItem(event)}
      className='add_item_form' 
      action="/"
    >

      <div className="input_container">
        <h2 className="input_title">Штрихкод</h2>
        <select
          className='input_select barcode_select'
          value={barcode}
          onChange={(event) =>  getItem(event.target.value)}>
            <option key='start' value=''></option>
            {
              barcodesList.map((itemBarcode: number) => (<option key={itemBarcode} value={itemBarcode}>{itemBarcode}</option>)
            )
            }
        </select>
      </div>

      {showCard &&
      <>
          <div className="card_container">
            <img className='card_img remove' src={URL} alt="product_img" />
            <div className="card_porduct_characters">
  
            <div className={"drop-down_characters active"}>
          <div className='item_characters_container'>

          <div className="characters_row remove">
            <p className="characters_name">Название:</p>
            <p className="characters_value">{name}</p>
          </div>

          <div className="characters_row remove">
            <p className="characters_name">Бренд:</p>
            <p className="characters_value">{brand}</p>
          </div>

          <div className="characters_row remove">
            <p className="characters_name">Производитель:</p>
            <p className="characters_value">{producer}</p>
          </div>

          <div className="characters_row remove">
            <p className="characters_name">Размер:</p>
            <p className="characters_value">{size} {sizeType === 'вес' ? 'мг' : 'мл'}</p>
          </div>

          <div className="characters_row remove">
            <p className="characters_name">Цена:</p>
            <p className="characters_value">{price} ₸</p>
          </div>

          <div className="characters_row remove">
            <p className="characters_name">Типы ухода:</p>
            <p className="characters_value">{types.map(type => type.value).join(', ')}</p>
          </div>

          </div>
        </div>
            </div>
          </div>
    
          <button
            type='submit'
            className='btn admin_btn'>
              <div className="btn_container">
                <p>Удалить из каталога</p> 
              </div>
          </button>
      </>
      }

    </form>
    </div>
  )
}

export default RemoveTab