import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: [
        {
            name: "Hamburger",
            price: 10,
            img: "img",
            count: 0
        },
        {
            name: "Cola",
            price: 20,
            img: "img",
            count: 0
        },
        {
            name: "Mercedes",
            price: 100000,
            img: "img",
            count: 0
        }
    ],
    reducers: {
        plusCount: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    item.count += 1
                    console.log(item.name)
                }
            })
        },
        minusCount: (state,action) => {
            state.filter((item) => {
                if(item.name === action.payload.name) {
                    item.count -= 1
                    console.log(item.name)
                }
            })
        }
    }
})

export const { plusCount,minusCount } = productSlice.actions;

export default productSlice.reducer;