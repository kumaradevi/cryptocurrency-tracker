import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa6";
import "./table.css"
export const Table = ({coins,currency}) => {
  const [favourite,setFavourite]=useState([])

  const handleFavourites=(id)=>{
    const favCoins=coins.find((coin)=>coin.id === id)
    console.log(favCoins)
    setFavourite(prev=>[...prev,favCoins])
  }
   console.log(favourite,"fav array")
  return (
    <div>
        <table className='w-[90%] mx-auto'>
            <thead className='headings'>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>1h %</th>
                <th>24 %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th>Volume(24h)</th>
                <th>Circulating Supply</th>
                <th>Last 7 days</th>
            </thead>
            <tbody >
               {coins&& coins.slice(0,10).map((coin)=>( <tr className='content'>
                    <td><div className='text-gray-400' onClick={()=>handleFavourites(coin.id)}><FaRegStar /></div></td>
                    <td><div className='w-[40px] h-[40px] flex gap-4 items-center'>
                          <img src={coin.image} alt={coin.image}  className='w-full h-full object-cover rounded-full'/>
                          <p>{coin.name}</p>
                          <p className='text-gray-500'>{coin.symbol.toUpperCase() }</p>
                        </div></td>
                    <td>{currency === "usd" ? "$" : "RS"}{coin.current_price.toLocaleString()}</td>
                    <td>{coin.price_change_percentage_1h_in_currency.toFixed(2)} %</td>
                    <td className={`${coin.price_change_percentage_24h > 0 ? "text-green-400": "text-red-400"} `}>{coin.price_change_percentage_24h.toFixed(2)} %</td>
                    <td>{coin.price_change_percentage_7d_in_currency.toFixed(2)} %</td>
                    <td>{currency === "usd" ? "$" : "RS"}{coin.market_cap.toLocaleString()}</td>
                    <td>{currency === "usd" ? "$" : "RS"}{coin.total_volume}</td>
                    <td>{coin.circulating_supply}</td>
                    <td></td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}
