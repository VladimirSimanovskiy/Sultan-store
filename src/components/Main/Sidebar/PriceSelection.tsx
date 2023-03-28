import React, { useState } from 'react'

const PriceSelection = () => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const setValidPrice = (value: string) => {
    let validPrice = value.replace(/[^0-9\.]/g, '')
    validPrice = validPrice.replace(/^0/g, '')
    return validPrice
  }

  const setValidRange = (value: string) => {

  }



  return (
    <div className='priсe_selection'>
      <p className='price_title'>Цена <b>₸</b></p>
      <form className='price_form' action="/">
        <input 
          className='price_input' 
          type="tel" 
          maxLength={6} 
          placeholder='0'
          value={minPrice}
          onFocus={(event: React.ChangeEvent<HTMLInputElement>) => event.target.placeholder = ''}
          onBlur={(event: React.ChangeEvent<HTMLInputElement>) => !event.target.value ? event.target.placeholder = '0' : event.target.value}
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => setMinPrice(setValidPrice(event.target.value))}
         />
        <p>-</p>
        <input 
          className='price_input' 
          type="tel" 
          maxLength={6} 
          placeholder='10 000'
          value={maxPrice}
          onFocus={(event: React.ChangeEvent<HTMLInputElement>) => event.target.placeholder = ''}
          onBlur={(event: React.ChangeEvent<HTMLInputElement>) => !event.target.value ? event.target.placeholder = '10 000' : event.target.value}
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(setValidPrice(event.target.value))}
         />
      </form>

    </div>
  )
}

export default PriceSelection