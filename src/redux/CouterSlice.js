import { createSlice } from "@reduxjs/toolkit"

const counterState = createSlice({
    name: 'counter',
    initialState: initialState,
    reducres:{
        inc: (state)=>{
            state.curValue = state.curValue+1;
        },
        dec: (state)=>{
            state.curValue = state.curValue-1;
        }
    }
}) 
const counterSlice = createSlice(param);
export default counterSlice;

export const {inc, dec} = counterSlice.actions;