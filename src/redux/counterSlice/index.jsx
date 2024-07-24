import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 1,
    reducers: {
        increaseby1: (state) => state + 1,
        increaseby5: (state) => state + 5,
        increaseby10: (state) => state + 10,
        increaseby20: (state) => state + 20,
    }
})

export const { increaseby1, increaseby10, increaseby5, increaseby20 } = counterSlice.actions

export default counterSlice.reducer