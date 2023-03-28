import React, { useState } from 'react'
import checkIcon from './icons/check_icon.svg'
import { useDispatch } from 'react-redux'
import { addProducerName } from '../../../store/slices/filterSlice'

interface ICheckbox {
  producerName: string
}

const Checkbox = (props: ICheckbox) => {

  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false)

  const onClickProducer =  (producerName: string) => {
    dispatch(addProducerName(producerName.toLowerCase()));
    return setIsChecked(!isChecked);
  }

  return (
    <label>
      <input 
          type="checkbox" 
          className="checkbox_input"
          name='test'
          onChange={() => onClickProducer(props.producerName)}
      />
      <span className={`checkbox_span ${isChecked ? 'selected_checkbox' : ''}`}
            aria-hidden='true'
      >
        <img src={checkIcon} />
      </span>
      {props.producerName}
    </label>
  )
}

export default Checkbox