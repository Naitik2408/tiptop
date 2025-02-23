import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsHandbag } from "react-icons/bs";
import { GiChickenOven } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const addedDishes = useSelector((state) => state.dishes.dishes);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const totalAmount = addedDishes.reduce((total, dish) => total + dish.price * dish.quantity, 0);

    return (
        <div className='flex justify-between px-4 md:px-10 lg:px-20 py-4 md:py-6 lg:py-10 md:grid grid-cols-2 md:grid-cols-3 bg-stone-50'>
            <Link to={'/'} className='flex gap-2 md:gap-3 items-center sigmar-regular'>
                <div className='p-2 md:p-3 rounded-full bg-red-400 w-fit text-white'>
                    <GiChickenOven size={30} md:size={40} lg:size={50} />
                </div>
                <div className='text-xl md:text-2xl lg:text-3xl text-red-400'>The TipTop</div>
            </Link>
            <div className='hidden md:block'></div>
            <div className='flex justify-end items-center'>
                <div
                    className='p-2 md:p-3 shadow-lg shadow-red-200 border border-red-100 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-300 ease-in-out'
                    onClick={handleOpenModal}
                >
                    <BsHandbag size={20} />
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-stone-400/55 backdrop-blur-md bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white min-h-96 max-h-[500px] overflow-y-auto mx-2 w-full max-w-lg flex flex-col justify-between p-4 md:p-7 rounded-2xl shadow-2xl shadow-stone-600'>
                        <Cart />
                        <div className='flex justify-between mt-4'>
                            <div className='text-lg font-semibold'>Total</div>
                            <div className='text-lg font-semibold'>${totalAmount.toFixed(2)}</div>
                        </div>
                        <div className='mt-8 text-white poppins-medium flex justify-between items-center'>
                            <div
                                className='bg-red-400 text-white px-4 md:px-6 rounded-tl-lg rounded-bl-3xl rounded-tr-3xl rounded-br-lg hover:bg-red-500 transition-all duration-300 cursor-pointer py-2'
                                onClick={handleCloseModal}
                            >
                                Close
                            </div>
                            <div className='bg-green-600 text-white px-4 md:px-6 rounded-tl-lg rounded-bl-3xl rounded-tr-3xl rounded-br-lg hover:bg-green-500 transition-all duration-300 cursor-pointer py-2'>
                                Confirm Order
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;