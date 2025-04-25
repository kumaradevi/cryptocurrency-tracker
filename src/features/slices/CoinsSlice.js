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
            if(Array.isArray(action.payload)){
                state.coins=action.payload;
            }
           
        },
        updateLivePrices: (state, action) => {
            const liveUpdates = action.payload;
            state.coins = state.coins.map((coin) => {
              const match = liveUpdates.find(
                (live) => live.s === `${coin.symbol.toUpperCase()}USDT`
              );
              if (match) {
                const newPrice = parseFloat(match.c);
                const oldPrice = parseFloat(match.o);
                return {
                  ...coin,
                  current_price: parseFloat(match.c),
                //   price_change_percentage_24h: oldPrice
                //   ? (((newPrice - oldPrice) / oldPrice) * 100).toFixed(2)
                //   : 0,
                //   market_cap_change_percentage_24h: (
                //     ((parseFloat(match.c) - parseFloat(match.o)) / parseFloat(match.o)) *
                //     100
                //   ).toFixed(2),
                  total_volume: parseFloat(match.q),
                };
              }
             
              return coin;
            });
          },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setError:(state,action)=>{
            state.error=action.payload;
        }
    }
})
export const {fetchCoins,updateLivePrices,setLoading,setError}=coinsSlice.actions;
export const selectCoins=(state)=>state.coins.coins;
export default coinsSlice.reducer;