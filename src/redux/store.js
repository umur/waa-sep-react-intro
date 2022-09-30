import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CouterSlice";

export const store= configureStore({
    reducer:{
        couter:counterSlice.reducer
    }
}); 