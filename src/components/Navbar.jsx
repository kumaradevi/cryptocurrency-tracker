import React from 'react'

const Navbar = ({setCurrency}) => {

    const handleChange=(e)=>{
       setCurrency(e.target.value);
      
    }
  return (
    <div className='w-full h-[90px] bg-blue-950 text-white sticky top-0 z-[999] '>
       <div className='w-[95%] mx-auto flex justify-between items-center h-full'>
       <div className=' flex gap-2 items-center'>
        <div className='w-[40px] h-[40px]'>
        <img src='/crypto.png' alt="" className='w-full h-full object-cover'/>
        </div>
            
            <h1 className='text-2xl font-medium'>Crypto currency Tracker</h1>
        </div>
       <div>
        <select name="" id="" onChange={handleChange} className='text-amber-400'>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
          
        </select>
       </div>
       </div>
    </div>
  )
}

export default Navbar