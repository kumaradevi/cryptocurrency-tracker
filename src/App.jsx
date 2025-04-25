
import { useEffect, useState } from 'react'
import { Table } from './components/table/Table'
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import { useDispatch, useSelector} from 'react-redux';
import { fetchCoins, selectCoins } from './features/slices/CoinsSlice';


function App() {
  const [coins,setCoins] =useState([]);
  const [currency,setCurrency]=useState("usd");
   const [input,setInput]=useState("");
  const dispatch=useDispatch();
  const coinsArr=useSelector(selectCoins);

   const filteredData=input ? coinsArr.filter((coin)=>coin.name.toLowerCase().includes(input)) : coinsArr;
      

  useEffect(()=>{
    const fetchCoinsData=async()=>{
      await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&price_change_percentage=1h,24h,7d&sparkline=true`)
      .then(res=>res.json())
      .then(data=>{
        dispatch(fetchCoins(data))
       
      })
    }
    fetchCoinsData()
  },[currency])

  useEffect(()=>{
    setCoins(coinsArr)
  },[coinsArr])

  return (
    <>
    <Navbar setCurrency={setCurrency} />
    <div className='mt-12'>
      <SearchBox setInput={setInput} input={input}/>
    <Table coins={filteredData} currency={currency}/>
    </div>
    
    </>
  )
}

export default App
