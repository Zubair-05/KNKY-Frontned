import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#fff] rounded-md flex p-3 space-x-4 items-center flex-wrap'>
        <button className='font-medium text-sm'>About Us </button>
        <div className='w-[1px] h-[12px] bg-[#AFB1B3]'></div>
        <button className='font-medium text-sm'>Blog </button>
        <div className='w-[1px] h-[12px] bg-[#AFB1B3]'></div>
        <button className='font-medium text-sm'>FAQs </button>
        <div className='w-[1px] h-[12px] bg-[#AFB1B3]'></div>
        <button className='font-medium text-sm'>Privacy Policy </button>
        <div className='w-[1px] h-[12px] bg-[#AFB1B3]'></div>
        <br />
        <button className='font-medium text-sm'>Terms and Conditions </button>        
    </div>
  )
}

export default Footer