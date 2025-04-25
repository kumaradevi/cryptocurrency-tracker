import React from 'react'

const Navbar = ({setCurrency}) => {

    const handleChange=(e)=>{
       setCurrency(e.target.value);
      
    }
  return (
    <div className='w-full h-[90px] bg-blue-950 text-white sticky top-0 z-[999] '>
       <div className='w-[80%] mx-auto flex justify-between items-center h-full'>
       <div>
            <img src="" alt="" />
            <h1>Crypto currency Tracker</h1>
        </div>
       <div>
        <select name="" id="" onChange={handleChange}>
            <option value="usd">usd</option>
            <option value="inr">inr</option>
        </select>
       </div>
       </div>
    </div>
  )
}

export default Navbar