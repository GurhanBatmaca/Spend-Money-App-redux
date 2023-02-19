import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        total_money: 100000000000
    },
    reducers: {
        buy: (state,action) => {
            state.total_money -=  action.payload
        },
        sell: (state,action) => {
            state.total_money += action.payload
        }
    }
})

export const { buy,sell } = moneySlice.actions;

export default moneySlice.reducer;