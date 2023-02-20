import { createSlice } from "@reduxjs/toolkit";
import { increment, decrement } from "./productSlice";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        total_money: 100000000000
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(increment, (state,action) => {
            state.total_money -= action.payload.price;
        })
        builder.addCase(decrement, (state,action) => {
            state.total_money += action.payload.price;
        })
    }
})

export const { buy,sell } = moneySlice.actions;

export default moneySlice.reducer;