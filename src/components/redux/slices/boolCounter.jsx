import { createSlice } from "@reduxjs/toolkit";

export const boolSlice = createSlice({
    initialState : 0,
    name : "boolCnt",
    reducers : {
        boolCnt0: (state) => state = 0,
        boolCnt1: (state) => state = 1,
        boolCnt2: (state) => state = 2,
        boolCnt3: (state) => state = 3,
    },
});

export const {boolCnt0,boolCnt1,boolCnt2,boolCnt3} = boolSlice.actions;

export default boolSlice.reducer;