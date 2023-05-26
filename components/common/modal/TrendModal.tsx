import React from 'react'

const TrendModal = () => {
  return (
    <div 
      className='z-50 fixed w-1/3 max-w-[400px] min-w-[300px] h-[500px] bg-white animate-slideDownModal
      top-0 left-1/2 shadow-2xl rounded-xl'>
      <p className='text-[#333] text-lg text-center py-4 font-semibold'>Your Post Successfully Created! 🥳</p>
    </div>
  )
}

export default TrendModal