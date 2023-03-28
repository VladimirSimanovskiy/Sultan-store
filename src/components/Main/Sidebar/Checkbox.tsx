import React, { useState } from 'react'
import checkIcon from './icons/check_icon.svg'

interface ICheckbox {
  producerName: string
}

const Checkbox = (props: ICheckbox) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <label>
      <input 
          type="checkbox" 
          className="checkbox_input"
          name='test'
          onChange={() => {
             setIsChecked(!isChecked)
          }}
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