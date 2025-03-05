import React from 'react'
import { GiChickenOven } from "react-icons/gi";

function Footer() {
    return (
        <div>
            <div className='mt-20 border-t-2 border-b-2 border-stone-300 mx-4 md:mx-10 lg:mx-20 py-10 md:py-15 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex gap-5 items-center sigmar-regular'>
                    <div className='p-3 rounded-full bg-red-400 w-fit text-white'>
                        <GiChickenOven size={40} />
                    </div>
                    <div className='text-2xl md:text-3xl text-red-400'>The Tip Top</div>
                </div>
                <div>
                    <div className='sigmar-regular text-lg md:text-xl'>Products</div>
                    <div className='mt-5 poppins-medium text-stone-600'>
                        <div>Home</div>
                        <div>About</div>
                        <div>Order Now</div>
                    </div>
                </div>
            </div>
            <div className='py-5 flex justify-center items-center poppins-regular text-xs md:text-sm lg:text-base'>
                Created By - &nbsp; <a href='https://www.linkedin.com/in/naitik2/' className='underline poppins-semibold'>Naitik Kumar</a> &nbsp; | &nbsp; Powered By -  &nbsp;<a href="" className='underline poppins-semibold'> Helmer</a>
            </div>
        </div>
    )
}

export default Footer