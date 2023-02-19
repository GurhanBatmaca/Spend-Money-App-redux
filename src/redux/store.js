import { configureStore } from "@reduxjs/toolkit";
import  moneySlice  from './slices/moneySlice';

export const store = configureStore({
    reducer: {
        money: moneySlice
    }
})