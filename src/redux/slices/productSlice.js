import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

export const productSlice = createSlice({
    name: "product",
    initialState: products,
    reducers: {
        increment: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    if(!action.payload.unit) {
                        item.count += 1;
                    } else {
                        item.count = action.payload.unit;
                    }
                }
            })
        },
        decrement: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    item.count -= 1;
                }
            })
        }
    }
})

export const { increment,decrement } = productSlice.actions;

export default productSlice.reducer;