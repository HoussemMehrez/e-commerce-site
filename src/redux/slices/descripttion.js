import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: 1,
  price: 2100,
};

const quantityPriceSlice = createSlice({
  name: 'quantityPrice',
  initialState,
  reducers: {
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = quantityPriceSlice.actions;
export default quantityPriceSlice.reducer;
