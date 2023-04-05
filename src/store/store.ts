import { configureStore } from "@reduxjs/toolkit";  
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import modalSlice from "./slices/modalSlice";


export const store = configureStore({
  reducer: {
    filterSlice,
    basketSlice,
    modalSlice
  },
})

export type RootState = ReturnType<typeof store.getState>