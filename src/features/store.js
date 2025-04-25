import { configureStore } from "@reduxjs/toolkit";
import coinsSliceReducer from "./slices/CoinsSlice"

const store=configureStore({
    reducer:{
        coins:coinsSliceReducer
    }
});

export default store;