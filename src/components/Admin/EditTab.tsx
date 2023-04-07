import React, { useState } from 'react'
import { IProduct } from '../../models/models';
import TextareaAutosize from 'react-textarea-autosize';
import { MultiSelect } from 'react-multi-select-component';

// functions
import { isValidPrice } from '../../functions/isValidPrice';
import { isValidURL } from '../../functions/isValidURL';
import { handleNumberInput } from '../../functions/handleNumberInput';
import { getLocalStorageItems } from '../../functions/getLocalStorageItems';

const EditTab = ({active}: {active: boolean}) => {

  const products: IProduct[]  = getLocalStorageItems()

  const barcodesList: string[] = products.map((item: IProduct) => item.barcode.toString())

    // Valides states
    const [invalidName, setInvalidName] = useState(false)
    const [invalidBrand, setInvalidBrand] = useState(false)
    const [invalidProducer, setInvalidProducer] = useState(false)
    const [invalidURL, setInvalidURL] = useState(false)
    const [invalidSize, setInvalidSize] = useState(false)
    const [invalidPrice, setInvalidPrice] = useState(false)
    const [invalidDescription, setInvalidDescription] = useState(false)
  
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

    // Types array
    type SelectValue = { value: string; label: string; }
  
    const typesList: SelectValue[] = [
      { value: "уход за телом", label: "Уход за телом" },
      { value: "уход за руками", label: "Уход за руками" },
      { value: "уход за ногами", label: "Уход за ногами" },
      { value: "уход за лицом", label: "Уход за лицом" },
      { value: "уход за волосами", label: "Уход за волосами" },
      { value: "средства для загара", label: "Средства для загара" },
      { value: "средства для бритья", label: "Средства для бритья" },
      { value: "подарочные наборы", label: "Подарочные наборы" },
      { value: "гигиеническая продукция", label: "Гигиеническая продукция" },
      { value: "гигиена полости рта", label: "Гигиена полости рта" },
      { value: "бумажная продукция", label: "Бумажная продукция" }
    ]
  
    // is Valid
    const isValid = (event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement, Element>, func: React.Dispatch<React.SetStateAction<boolean>>) => {
      if (func === setInvalidURL && !isValidURL(event.target.value)) {
        event.target.placeholder = 'Поле не может быть пустым'
        func(true)
        return
      }
  
      if (func === setInvalidPrice && !isValidPrice(event.target.value)) {
        event.target.placeholder = 'Поле не может быть пустым'
        func(true)
        return
      }
  
  
      if (!event.target.value) func(true)
      event.target.placeholder = 'Поле не может быть пустым'
    }
  
    const setValid = (event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement, Element>, func: React.Dispatch<React.SetStateAction<boolean>>) => {
      event.target.placeholder = '';
      func(false)
    }

    // get item by barcode
    let item: IProduct
    let localStorageItem 

    const getLocalStorageItem = (value: string) => {
      setBarcode(value)

      localStorageItem = localStorage.getItem(value )

      if (typeof localStorageItem === 'string') {
        item = JSON.parse(localStorageItem)

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

    // item to JSON
    const changeItem = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      switch (false) {
        case Boolean(name):
          setInvalidName(true)
          return
        case Boolean(brand):
          setInvalidBrand(true)
          return
        case Boolean(producer):
          setInvalidProducer(true)
          return
        case Boolean(size):
          setInvalidSize(true)
          return
        case isValidPrice(price):
          setInvalidPrice(true)
          return
        case Boolean(description):
          setInvalidDescription(true)
          return
      }
  
      const newItem = {
        id: Number(barcode),
        URL: URL,
        name: name,
        brand: brand,
        producer: producer,
        size_type: sizeType,
        size: Number(size),
        barcode: Number(barcode),
        price: parseFloat(price.replace(/\,/g, '.')),
        description: description,
        types: types.map((item: SelectValue) => item.value)
      }
  
      if (localStorage.getItem(newItem.id.toString()) !== null) {
        localStorage.removeItem(newItem.id.toString())
        localStorage.setItem(newItem.id.toString(), JSON.stringify(newItem))
      }

      setBarcode('')
    }

  
  return (
    <div className={active ? 'tab_container active' : 'tab_container'}>
    <form 
      onSubmit={(event) => changeItem(event)}
      className='add_item_form' 
      action="/"
    >

      <div className="input_container">
        <h2 className="input_title">Штрихкод</h2>
        <select
          className='input_select barcode_select'
          value={barcode}
          onChange={(event) =>  getLocalStorageItem(event.target.value)}>
            <option key='start' value=''></option>
            {
              barcodesList.map((itemBarcode: string) => (<option key={itemBarcode} value={itemBarcode}>{itemBarcode}</option>)
            )
            }
        </select>
      </div>

      {barcode !== '' &&
      <>
          <div 
              className="input_container">
            <h2 className="input_title">Название товара</h2>
            <input 
              type="text" 
              className={invalidName ? "text_input invalid" : "text_input"} 
              placeholder='Название...'
              value={name}
              onFocus={(event) => setValid(event, setInvalidName)}
              onBlur={(event) => isValid(event, setInvalidName)}
              onChange={(event) => !invalidName ? setName(event.target.value) : ''}
              />
          </div>
    
          <div className="input_container">
            <h2 className="input_title">Бренд</h2>
            <input 
              type="text"   
              className={invalidBrand ? "text_input invalid" : "text_input"} 
              placeholder='Бренд...'
              value={brand}
              onFocus={(event) => setValid(event, setInvalidBrand)}
              onBlur={(event) => isValid(event, setInvalidBrand)}
              onChange={(event) => !invalidBrand ? setBrand(event.target.value) : ''}/>
          </div>
    
          <div className="input_container">
            <h2 className="input_title">Производитель</h2>
            <input 
              type="text" 
              className={invalidProducer ? "text_input invalid" : "text_input"} 
              placeholder='Производитель...'
              value={producer}
              onFocus={(event) => setValid(event, setInvalidProducer)}
              onBlur={(event) => isValid(event, setInvalidProducer)}
              onChange={(event) => !invalidProducer ? setProducer(event.target.value) : ''}/>
          </div>
    
          <div className="input_container">
            <h2 className="input_title">URL изображения</h2>
            <input 
              type="text" 
              className={invalidURL ? "text_input invalid" : "text_input"} 
              placeholder='URL...'
              value={URL}
              onFocus={(event) => setValid(event, setInvalidURL)}
              onBlur={(event) => isValid(event, setInvalidURL)}
              onChange={(event) => !invalidURL ? setURL(event.target.value) : ''}/>
              <p className={!invalidURL ? "invalid_value_message" : "invalid_value_message active"}>Некорректный URL</p>
          </div>
    
          <div className="input_container">
            <h2 className="input_title">Размер</h2>
            <div className="input_line">
                <p className='input_subtitle'>Тип размера:</p>
                <select
                  className='input_select'
                  value={sizeType} 
                  onChange={(event) => setSizeType(event.target.value)}>
                    <option value="объем">Объем</option>
                    <option value="вес">Вес</option>
                </select>
              </div>

              <div className="input_line">
              <p className='input_subtitle'>Размер:</p>
                <input 
                  type="tel" 
                  className={invalidSize ? "number_input invalid" : "number_input"}
                  placeholder='Размер...'
                  value={size}
                  maxLength={5}
                  onFocus={(event) => {
                    setValid(event, setInvalidSize)
                    setSize('')
                  }}
                  onBlur={(event) => isValid(event, setInvalidSize)}
                  onChange={(event) => !invalidSize ? setSize(handleNumberInput(event.target.value)) : ''}/>
              </div>
          </div>
    
          <div className="input_container">
            <h2 className="input_title">Цена</h2>
            <input 
              type="tel" 
              className={invalidPrice ? "number_input invalid" : "number_input"}
              placeholder='Формат: 12345,67'
              value={price}
              maxLength={8}
              onFocus={(event) => setValid(event, setInvalidPrice)}
              onBlur={(event) => isValid(event, setInvalidPrice)}
              onChange={(event) => !invalidPrice ? setPrice((event.target.value).replace(/^0/g, '')) : ''}/>
              <p className={!invalidPrice ? "invalid_value_message" : "invalid_value_message active"}>Укажите цену в формате "12345.67"</p>
          </div>
    
          <div className="input_container">
            <h2 className="input_title">Описание</h2>
    
            <TextareaAutosize 
              className={invalidDescription ? "textarea invalid" : "textarea"} 
              value={description}
              placeholder='Описание...'
              onFocus={(event) => setValid(event, setInvalidDescription)}
              onBlur={(event) => isValid(event, setInvalidDescription)}
              onChange={(event) => !invalidDescription ? setDescription(event.target.value) : ''}
              />
          </div>
    
          
          <div className="input_container">
            <h2 className="input_title">Категории</h2>
            <MultiSelect
              className='multiselect_input'
              options={typesList}
              value={types}
              onChange={setTypes}
              labelledBy="Select"
              hasSelectAll={false}
              disableSearch={true}
              
            />
          </div>
    
          <button
            type='submit'
            className='btn admin_btn'>
              <div className="btn_container">
                <p>Сохранить изменения</p> 
              </div>
          </button>
      </>

      }

    </form>
    </div>
  )
}

export default EditTab