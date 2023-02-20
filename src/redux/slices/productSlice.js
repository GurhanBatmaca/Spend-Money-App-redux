import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

export const productSlice = createSlice({
    name: "product",
    initialState: products,
    reducers: {
        increment: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    item.count += 1
                    console.log(item.name)
                }
            })
        },
        decrement: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    item.count -= 1
                    console.log(item.name)
                }
            })
        }
    }
})

export const { increment,decrement } = productSlice.actions;

export default productSlice.reducer;