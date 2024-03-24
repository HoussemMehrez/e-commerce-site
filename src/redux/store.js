import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from './slices/admindata'
import  userSlice  from './slices/userdata'
import  orderSlice  from './slices/orderdata'
import favoritesSlice from './slices/card1data'
import quantityPriceSlice from './slices/descripttion'
import sliderSlice from './slices/slider'
export const store = configureStore({
  reducer: {
    admin:adminSlice,
    user:userSlice,
    order:orderSlice,
    favorites:favoritesSlice,
    quantityPrice:quantityPriceSlice,
    slider:sliderSlice,
  
  },
})