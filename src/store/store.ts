import { configureStore } from "@reduxjs/toolkit";  
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";


export const store = configureStore({
  reducer: {
    filterSlice,
    basketSlice
  },
})

export type RootState = ReturnType<typeof store.getState>