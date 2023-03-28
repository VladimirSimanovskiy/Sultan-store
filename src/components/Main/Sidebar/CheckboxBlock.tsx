import React from 'react'
import loupe from './icons/loupe.svg'
import Checkbox from './Checkbox'
import { useInput } from '../../../hook/input'
import { IProduser } from '../../../models/models'

interface ICheckboxList {
  title: string,
  producers: IProduser[]
}

const CheckboxBlock = (props: ICheckboxList) => {

  const input = useInput('')

  return (
    <div className='checkbox_block'>
      <h3 className="checkbox_title">{props.title}</h3>

      <form className='search' action='/' method='get'>
        <input 
          className='search_input' 
          type="text" 
          placeholder='Поиск...'
          {...input}
        />
        <button className='search_btn'>
          <img src={loupe} alt="" />
        </button>
      </form>

      <form action="/" className="checkbox_form">
        {props.producers.map((producer) => (
          <div 
            key={producer.id}          
            className='checkbox_container'
>            <Checkbox 
                producerName={producer.name}/>
          </div>

        ))}
      </form>




    </div>
  )
}

export default CheckboxBlock