import {createSlice} from '@reduxjs/toolkit'

interface ModalState {
  showAdmin: boolean,
  showBasketModal: boolean 
}

const initialState: ModalState = {
  showAdmin: false,
  showBasketModal: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {

    setShowBasketModal(state) {
      state.showBasketModal = !state.showBasketModal;
      if (state.showBasketModal) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "scroll"
      }
    },

   toggleAdmin(state) {
      state.showAdmin = !state.showAdmin;
      if (state.showAdmin) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "scroll"
      }
    }

  }
})

export const { setShowBasketModal, toggleAdmin } = modalSlice.actions;

export default modalSlice.reducer;