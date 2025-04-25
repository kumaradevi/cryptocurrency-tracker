import React, { useState } from 'react'

const SearchBox = () => {
    const [input,setInput]=useState("")
  return (
    <div>
        <div className='w-[200px] px-5 py-2 border border-gray-500 rounded-md'>
            <input type="text"  className='outline-none' placeholder='search coins here...'/>
        </div>
    </div>
  )
}

export default SearchBox