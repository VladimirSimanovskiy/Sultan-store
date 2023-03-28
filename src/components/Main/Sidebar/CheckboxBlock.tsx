import React, { useState } from 'react'
import loupe from './icons/loupe.svg'
import Checkbox from './Checkbox'
import { IProduser } from '../../../models/models'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store'
import { setSearchName } from '../../../store/slices/filterSlice'

interface ICheckboxList {
  title: string,
  producers: IProduser[]
}

const CheckboxBlock = (props: ICheckboxList) => {

  const dispatch = useDispatch();
  const searchName = useSelector((state: RootState) => state.filterSlice.searchName)

  const [producerName, setProducerName] = useState(searchName)

  return (
    <div className='checkbox_block'>
      <h3 className="checkbox_title">{props.title}</h3>

      <form className='search' 
            action='/' 
            method='get'
            onSubmit={(event) => {
              event.preventDefault()
              dispatch(setSearchName(producerName));
              return false;
              }
            }>
        <input 
          className='search_input' 
          type="text" 
          placeholder='Поиск...'
          value={producerName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setProducerName(event.target.value)}
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