import { createSlice } from "@reduxjs/toolkit";

const initialState={
    coins:[],
    loading:false,
    error:false
}

const coinsSlice=createSlice({
    name:"coins",
    initialState,
    reducers:{
        fetchCoins:(state,action)=>{
            state.coins=action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setError:(state,action)=>{
            state.error=action.payload;
        }
    }
})
export const {fetchCoins,setLoading,setError}=coinsSlice.actions;
export const selectCoins=(state)=>state.coins.coins;
export default coinsSlice.reducer;