import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins, selectCoins } from '../features/slices/CoinsSlice';

const SearchBox = ({setInput,input}) => {
   
    const coinsArr=useSelector(selectCoins);
    const dispatch=useDispatch()
    // const filteredData=coinsArr.filter((coin)=>coin.name.toLowerCase().includes(input));
    // useEffect(()=>{
    //     if(input){
    //         dispatch(fetchCoins(filteredData));
    //     }
      
    // },[filteredData])
  
  return (
    <div className='w-[95%] flex justify-end mb-12'>
        <div className='w-[320px] px-5 py-2 border border-gray-500 rounded-md'>
            <input type="text"  className='outline-none' placeholder='search coins here...' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
    </div>
  )
}

export default SearchBox