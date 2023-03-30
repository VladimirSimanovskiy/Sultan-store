import {createSlice} from '@reduxjs/toolkit'

interface ProductState {
  categoryName: string[],
  producerName: string[],
  minPrice: string,
  maxPrice: string,
  sortProperty: string,
  searchName: string,
}

const initialState: ProductState = {
  categoryName: [],
  producerName: [],
  minPrice: '0',
  maxPrice: '10000',
  sortProperty: 'Название ▲',
  searchName: ''
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    addCategoryName(state, action) {
      if (state.categoryName.includes(action.payload)) {
        state.categoryName = state.categoryName.filter(item => item !== action.payload)
      } else {    
        state.categoryName.push(action.payload);
      }
    },

    addProducerName(state, action) {
      if (state.producerName.includes(action.payload)) {
        state.producerName = state.producerName.filter(item => item !== action.payload)
      } else {
        state.producerName.push(action.payload);
      }
    },

    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },

    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },

    setSortProperty(state, action) {
      state.sortProperty = action.payload;
    },

    setSearchName(state, action) {
      state.searchName = action.payload;
      state.producerName = []

    },
  }
})

export const { addProducerName, addCategoryName, setSortProperty, setMinPrice, setMaxPrice, setSearchName} = filterSlice.actions;

export default filterSlice.reducer;