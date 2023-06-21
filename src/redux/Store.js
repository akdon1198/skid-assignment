import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserRedux";

export const store = configureStore({
    reducer:{
        user : userReducer
    }
})