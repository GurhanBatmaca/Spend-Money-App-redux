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
    reducers: {}
})

export default productSlice.reducer;