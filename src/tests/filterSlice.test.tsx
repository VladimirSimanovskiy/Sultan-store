import React from "react";
import '@testing-library/jest-dom/extend-expect'; 
import { render, screen } from "@testing-library/react";
import { store } from "../store/store";
import { setMinPrice } from "../store/slices/filterSlice";

describe('filterSlice', () => {
  test('setMinPrice', () => {
    let state = store.getState().filterSlice

    store.dispatch(setMinPrice('100'))
    state = store.getState().filterSlice
    const newMinPrice = state.minPrice
    expect(newMinPrice).toBe('100')
  })
})

