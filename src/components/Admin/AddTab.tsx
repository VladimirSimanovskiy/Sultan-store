import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import Select from 'react-select/dist/declarations/src/Select';
import { MultiSelect } from 'react-multi-select-component';

// Functions
import { handleNumberInput } from '../../functions/handleNumberInput'
import { isValidPrice } from '../../functions/isValidPrice'
import { isValidURL } from '../../functions/isValidURL';

const AddTab = ({active}: {active: boolean}) => {

  // Valides states
  const [invalidName, setInvalidName] = useState(false)
  const [invalidBrand, setInvalidBrand] = useState(false)
  const [invalidProducer, setInvalidProducer] = useState(false)
  const [invalidURL, setInvalidURL] = useState(false)
  const [invalidSize, setInvalidSize] = useState(false)
  const [invalidBarcode, setInvalidBarcode] = useState(false)
  const [invalidPrice, setInvalidPrice] = useState(false)
  const [invalidDescription, setInvalidDescription] = useState(false)

  // Values states
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [producer, setProducer] = useState('')
  const [URL, setURL] = useState('')
  const [sizeType, setSizeType] = useState('объем')
  const [size, setSize] = useState('')
  const [barcode, setBarcode] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [types, setTypes] = useState([])

  const characters = [
    [name, setInvalidName],
    [brand, setInvalidBrand],
    [producer, setInvalidProducer],
    [URL, setInvalidURL],
    [size, setInvalidSize],
    [barcode, setInvalidBarcode],
    [price, setInvalidPrice],
    [description, setInvalidDescription]
  ]

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
    
    if (func === setInvalidBarcode && event.target.value.length != 13) {
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

  // item to JSON
  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
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
      case Boolean(barcode):
        setInvalidBarcode(true)
        return
      case isValidPrice(price):
        setInvalidPrice(true)
        return
      case Boolean(description):
        setInvalidDescription(true)
        return
    }

    const item = {
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

    if (localStorage.getItem(item.id.toString()) === null) {
      localStorage.setItem(item.id.toString(), JSON.stringify(item))

      setName('')
      setBrand('')
      setProducer('')
      setURL('')
      setSize('')
      setBarcode('')
      setPrice('')
      setDescription('')
      setTypes([])
    }
  }

  // content
  return (
    <div className={active ? 'tab_container active' : 'tab_container'}>
      <form 
        onSubmit={(event) => addItem(event)}
        className='add_item_form' 
        action="/"
      >

        <div className="input_container">
          <h2 className="input_title">Штрихкод</h2>
          <input 
            type="tel" 
            className={invalidBarcode ? "number_input invalid" : "number_input"}
            placeholder='Штрихкод...'
            value={barcode}
            maxLength={13}
            onFocus={(event) => setValid(event, setInvalidBarcode)}
            onBlur={(event) => isValid(event, setInvalidBarcode)}
            onChange={(event) => !invalidBarcode ? setBarcode(handleNumberInput(event.target.value)) : ''}/>
            <p className={!invalidBarcode ? "invalid_value_message" : "invalid_value_message active"}>Штрихкод должен состоять из 13 цифр</p>
        </div>

        <div className="input_container">
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
              <p>Добавить в каталог</p> 
            </div>
        </button>
      </form>
    </div>
  )
}

export default AddTab