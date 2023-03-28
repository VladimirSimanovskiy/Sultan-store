import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../../store/slices/filterSlice';
import { RootState } from '../../../store/store';
import { useDebouncedCallback } from 'use-debounce';

const PriceSelection = () => {

  const dispatch = useDispatch();
  const minPrice = useSelector((state: RootState) => state.filterSlice.minPrice)
  const maxPrice = useSelector((state: RootState) => state.filterSlice.maxPrice)

  const [min, setMin] = useState(minPrice)
  const [max, setMax] = useState(maxPrice)

  const debounceOnMinPrice = useDebouncedCallback((value) => {
    dispatch(setMinPrice(value))
  }, 250)

  const debounceOnMaxPrice = useDebouncedCallback((value) => {
    dispatch(setMaxPrice(value))
  }, 250)

  const setValidPrice = (value: string) => {
    let validPrice = value.replace(/[^0-9\.]/g, '')
    validPrice = validPrice.replace(/^0/g, '')
    return validPrice
  }

  return (
    <div className='priсe_selection'>
      <p className='price_title'>Цена <b>₸</b></p>
      <form className='price_form' action="/">
        <input 
          className='price_input' 
          type="tel" 
          maxLength={5} 
          placeholder='0'
          value={min}
          onFocus={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.target.placeholder = '';
            event.target.value = event.target.value !== '0' ? event.target.value : ''
          }}
          onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value) event.target.value = '0';
            if (Number(event.target.value) > Number(maxPrice)) {
              setMax(setValidPrice(event.target.value));
              debounceOnMaxPrice(setValidPrice(event.target.value))
            }
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMin(setValidPrice(event.target.value));
            debounceOnMinPrice(setValidPrice(event.target.value))
          }}
         />
        <p>-</p>
        <input 
          className='price_input' 
          type="tel" 
          maxLength={5} 
          placeholder='10 000'
          value={max}
          onFocus={(event: React.ChangeEvent<HTMLInputElement>) => event.target.placeholder = ''}
          onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value) {
              setMax('100');
              setMin('0');
              dispatch(setMinPrice('0'));
              dispatch(setMaxPrice('100'));
              return;
            };
            if (Number(event.target.value) < Number(minPrice)) {
              setMin(setValidPrice(event.target.value));
              debounceOnMinPrice(setValidPrice(event.target.value))
            }}
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMax(setValidPrice(event.target.value));
            debounceOnMaxPrice(setValidPrice(event.target.value))
          }}
         />
      </form>

    </div>
  )
}

export default PriceSelection