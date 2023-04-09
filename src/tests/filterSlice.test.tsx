import React from "react";
import '@testing-library/jest-dom/extend-expect'; 
import { store } from "../store/store";
import { setMinPrice, setMaxPrice, addProducerName } from "../store/slices/filterSlice";

describe('filterSlice', () => {
  test('setMinPrice', () => {
    let state = store.getState().filterSlice

    store.dispatch(setMinPrice('100'))
    state = store.getState().filterSlice
    const newMinPrice = state.minPrice
    expect(newMinPrice).toBe('100')
  }),
  test('setMaxPrice', () => {
    let state = store.getState().filterSlice

    store.dispatch(setMaxPrice('1000'))
    state = store.getState().filterSlice
    const newMaxPrice = state.maxPrice
    expect(newMaxPrice).toBe('1000')
  }),
  test('addProducerName', () => {
    let state = store.getState().filterSlice

    store.dispatch(addProducerName('test'))
    state = store.getState().filterSlice
    const newProducerName = state.producerName.find((producer) => producer === 'test')
    expect(newProducerName).toBe('test')
  })
})

