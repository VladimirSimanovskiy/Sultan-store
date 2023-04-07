import {createSlice} from '@reduxjs/toolkit'
import { ISelectedItem } from '../../models/models'

const initialState: ISelectedItem = {
  totalPrice: 0,
  totalItems: 0,
  items: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addToBasket(state, action) {
      const findItem = state.items.find(obj => obj.item.id === action.payload.id)

      if (findItem) {
        findItem.itemCount++
      } else {
        state.items.push({
          itemCount: 1,
          item: action.payload})
      }

      state.totalPrice += action.payload.price
      state.totalItems += 1
    },

    removeOneFromBasket(state, action) {
      state.totalPrice -= action.payload.price
      state.totalItems -= 1

      state.items.map((item) => {
        if (item.item.id === action.payload.id) {
          item.itemCount -= 1
        }
      })
    },

    removeAllFromBasket(state, action) {

      state.totalPrice -= (action.payload.item.price * action.payload.itemCount)
      state.totalItems -= (action.payload.itemCount)

      state.items = state.items.filter(obj => obj.item.id !== action.payload.item.id)
    },

    clearBasket(state) {
      state.items = []
      state.totalItems = 0
      state.totalPrice = 0
    }
  }
})

export const { addToBasket, removeOneFromBasket, removeAllFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;