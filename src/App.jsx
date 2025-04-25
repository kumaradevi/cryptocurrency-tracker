
import { useEffect, useState } from 'react'
import { Table } from './components/Table'

function App() {
  const [coins,setCoins] =useState([]);

  useEffect(()=>{
    const fetchCoins=async()=>{
      await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res=>res.json())
      .then(data=>setCoins(data))
      .catch(err=>console.log(err.message))
    }
    fetchCoins()
  },[])

  return (
    <>
    <Table coins={coins}/>
    </>
  )
}

export default App
