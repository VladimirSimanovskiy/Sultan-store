import { IProduct } from "../../models/models"
import {createSlice} from '@reduxjs/toolkit'


interface ProductState {
  categoryName: string[],
  //sotrProperty: string
}

const initialState: ProductState = {
  categoryName: [],
  //sotrProperty: 'Название ▼'
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addCategoryName(state, action) {
      if (state.categoryName.includes(action.payload)) {
        state.categoryName = state.categoryName.filter(item => item !=action.payload)
      } else {    
        state.categoryName.push(action.payload);
      }

    }
  }
})

export const { addCategoryName } = filterSlice.actions;

export default filterSlice.reducer;