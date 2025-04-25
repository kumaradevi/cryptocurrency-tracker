import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa6";
import "./table.css"
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
export const Table = ({coins,currency}) => {
  

  
  return (
    <div>
        <table className='w-[95%] mx-auto'>
            <thead className='headings'>
                <th>#</th>
                <th >Name</th>
                <th>Price</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th >Volume(24h)</th>
                <th >Circulating Supply</th>
                <th >Last 7 days</th>
            </thead>
            <tbody >
               {coins&& coins.map((coin,index)=>( <tr className='content' key={index}>
                    <td><div className=' flex gap-3 items-center'> <div className='text-gray-400 '><FaRegStar /> </div > <span>{index+1}</span></div></td>
                    <td>
                      <div className='w-full flex gap-5 items-center'>
                      <div className='w-[40px] h-[40px] flex gap-4 items-center'>
                          <img src={coin.image} alt={coin.image}  className='w-full h-full object-cover rounded-full'/>
                          </div>
                         <div className='flex  gap-1'>
                         <p>{coin.name}</p>
                         <p className='text-gray-500 '>{coin.symbol.toUpperCase() }</p>
                         </div>
                       
                        </div>
                        </td>
                    <td>{currency === "usd" ? "$" : "RS"} {coin.current_price.toLocaleString()}</td>
                    <td className={`${coin.price_change_percentage_1h_in_currency > 0 ? "text-green-400": "text-red-400"}  text-sm flex gap-2 items-center font-medium`}>{coin.price_change_percentage_1h > 0 ? <BiSolidUpArrow size={11}/> : <BiSolidDownArrow size={11}/>} {coin.price_change_percentage_1h_in_currency.toFixed(2)} %</td>
                    <td className={`${coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"} text-sm flex gap-2 items-center font-medium`}>
  {coin.price_change_percentage_24h > 0 ? <BiSolidUpArrow size={11} /> : <BiSolidDownArrow size={11} />}
  {typeof coin.price_change_percentage_24h === 'number' && !isNaN(coin.price_change_percentage_24h)
    ? coin.price_change_percentage_24h.toFixed(2)
    : "0.00"} %
</td>


                    <td className={`${coin.price_change_percentage_7d_in_currency > 0 ? "text-green-400": "text-red-400"}  text-sm flex gap-2 items-center font-medium`}>{coin.price_change_percentage_7d_in_currency > 0 ? <BiSolidUpArrow size={11}/> : <BiSolidDownArrow size={11}/>}{coin.price_change_percentage_7d_in_currency.toFixed(2)} %</td>
                    <td >{currency === "usd" ? "$"  :"RS"} {coin.market_cap.toLocaleString()}</td>
                    <td >{currency === "usd" ? "$"  :"RS"} {coin.total_volume}</td>
                    <td >{coin.circulating_supply}</td>
                    <td>
  {coin.sparkline_in_7d?.price?.length > 0 &&
   !coin.sparkline_in_7d.price.some(isNaN) &&
   Math.max(...coin.sparkline_in_7d.price) !== Math.min(...coin.sparkline_in_7d.price) ? (
    <svg width="100" height="30">
      <polyline
        fill="none"
        stroke={
          coin.price_change_percentage_7d_in_currency > 0
            ? "#4ade80"
            : "#f87171"
        }
        strokeWidth="2"
        points={coin.sparkline_in_7d.price
          .map((p, i) => {
            const min = Math.min(...coin.sparkline_in_7d.price);
            const max = Math.max(...coin.sparkline_in_7d.price);
            const scaledY = max !== min ? 30 - ((p - min) * 30) / (max - min) : 15;
            return `${i * 3},${scaledY}`;
          })
          .join(" ")}
      />
    </svg>
  ) : (
    <span className="text-xs text-gray-400">No data</span>
  )}
</td>

                </tr>))}
            </tbody>
        </table>
    </div>
  )
}
