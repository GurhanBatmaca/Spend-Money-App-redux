import { configureStore } from "@reduxjs/toolkit";
import  moneySlice  from './slices/moneySlice';
import  productSlice  from './slices/productSlice';

export const store = configureStore({
    reducer: {
        money: moneySlice,
        product: productSlice
    }
})