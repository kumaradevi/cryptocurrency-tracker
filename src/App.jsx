
import { useEffect, useRef, useState } from 'react'
import { Table } from './components/table/Table'
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import { useDispatch, useSelector} from 'react-redux';
import { fetchCoins, selectCoins, updateLivePrices } from './features/slices/CoinsSlice';


function App() {
  const [coins,setCoins] =useState([]);
  const [currency,setCurrency]=useState("usd");
   const [input,setInput]=useState("");
   const wsRef = useRef(null);
  const dispatch=useDispatch();
  const coinsArr=useSelector(selectCoins);

   const filteredData=input ? coinsArr.filter((coin)=>coin.name.toLowerCase().includes(input)) : coinsArr;
  
  useEffect(()=>{
    const ws=new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");
    wsRef.current=ws;
    ws.onopen=()=>{
      console.log("websocket is connected")
    }
    ws.onmessage=(event)=>{
      const liveUpdates = JSON.parse(event.data);
      console.log(liveUpdates,"live updatseeeee")
      dispatch(updateLivePrices(liveUpdates));
      
    }

    ws.onerror=(err)=>{
      console.log(err)
    }
    ws.onclose=()=>{
      console.log("websocket is closed")
    }
   
  return () => {
    if (wsRef.current) {
      wsRef.current.close();
    }
  };
  },[])

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
