import React from 'react'

const Newsletter = () => {
  return (
    <div className='border h-64 w-[80%] mx-auto rounded-xl space-y-4 flex flex-col justify-center items-center shadow-md drop-shadow-lg'>
      <div>
        <p className='text-xl font-bold'>Get new products update every months in your inbox!</p>
        <p className='text-sm font-extralight py-4'>Subscribe to our newsletter for upates</p>
      </div>
      <div>
        <input className='outline-none border rounded-l-md px-4 py-2 h-10' placeholder='Enter your email to join'/>
        <button className='bg-black text-white py-2 px-2 rounded-r-md h-10 hover:cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter