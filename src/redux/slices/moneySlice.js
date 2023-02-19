import { createSlice } from "@reduxjs/toolkit";
import { minusCount, plusCount } from "./productSlice";


export const moneySlice = createSlice({
    name: "money",
    initialState: {
        total_money: 100000000000
    },
    reducers: {
        buy: (state,action) => {
            // state.total_money -=  action.payload.price;
            // console.log(action.payload.count);

            
        },
        sell: (state,action) => {
            // state.total_money += action.payload.price;
            // console.log(action.payload.count);

        }
    },
    extraReducers: (builder) => {
        builder.addCase(plusCount, (state,action) => {
            state.total_money -= action.payload.price;
        })
        builder.addCase(minusCount, (state,action) => {
            state.total_money -= action.payload.price;
        })
    }
})

export const { buy,sell } = moneySlice.actions;

export default moneySlice.reducer;