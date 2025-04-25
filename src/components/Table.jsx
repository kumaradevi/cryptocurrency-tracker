import React from 'react'
import { FaRegStar } from "react-icons/fa6";
export const Table = ({coins}) => {

  return (
    <div>
        <table>
            <thead>
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
            <tbody>
               {coins&& coins.slice(0,10).map((coin)=>( <tr>
                    <td><div className='text-gray-400'><FaRegStar /></div></td>
                    <td><div>
                          <img src={coin.image} alt="" />
                          <p>{coin.name}</p>
                        </div></td>
                    <td></td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}
