import { createSlice } from "@reduxjs/toolkit";
import { increment, decrement } from "./productSlice";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        total_money: 100000000000
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(increment, (state,action) => {
            if(!action.payload.unit) {
                state.total_money -= action.payload.price;
            } else {
                const total_spending = action.payload.price * action.payload.unit;
                if(total_spending - state.total_money < 0) {
                    state.total_money -= (action.payload.price*action.payload.unit);
                } 
            }
        })
        builder.addCase(decrement, (state,action) => {
            state.total_money += action.payload.price;
        })
    }
})

export const { buy,sell } = moneySlice.actions;

export default moneySlice.reducer;