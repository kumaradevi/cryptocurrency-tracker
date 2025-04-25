
import { useEffect, useState } from 'react'
import { Table } from './components/table/Table'
import Navbar from './components/Navbar';



function App() {
  const [coins,setCoins] =useState([]);
  const [currency,setCurrency]=useState("usd")

  useEffect(()=>{
    const fetchCoins=async()=>{
      await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&price_change_percentage=1h,24h,7d`)
      .then(res=>res.json())
      .then(data=>setCoins(data))
      .catch(err=>console.log(err.message))
    }
    fetchCoins()
  },[currency])

  return (
    <>
    <Navbar setCurrency={setCurrency} />
    <div className='mt-12'>
    <Table coins={coins} currency={currency}/>
    </div>
    
    </>
  )
}

export default App
