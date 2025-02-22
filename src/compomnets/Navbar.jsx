import React from 'react'

import { BsHandbag } from "react-icons/bs";
import { GiChickenOven } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between px-4 md:px-10 lg:px-20 py-4 md:py-6 lg:py-10 md:grid grid-cols-2 md:grid-cols-3'>
        <Link to={'/'} className='flex gap-2 md:gap-3 items-center sigmar-regular'>
            <div className='p-2 md:p-3 rounded-full bg-red-400 w-fit text-white'>
                <GiChickenOven size={30} md:size={40} lg:size={50}/>
            </div>
            <div className='text-xl md:text-2xl lg:text-3xl text-red-400'>The TipTop</div>
        </Link>
        <div className='hidden md:block'></div>
        <div className='flex justify-end items-center'>
            <div className='p-2 md:p-3 shadow-lg shadow-red-200 border border-red-100 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-300 ease-in-out'>
                <BsHandbag size={20} />
            </div>
        </div>
    </div>
  )
}

export default Navbar