import React from 'react'

function HowItWorks() {
    return (
        <div className='min-h-[900px] mt-32 bg-gradient-to-b from-red-100 to-transparent rounded-t-[80px] md:rounded-t-[300px] lg:rounded-t-[500px] flex flex-col items-center px-4 md:px-20 lg:px-40 py-16 md:py-24 lg:py-32'>
            <div className='sigmar-regular text-3xl md:text-4xl lg:text-5xl text-center'>How Does It <br className='block md:hidden' /> Work</div>


            <div className='mt-10 md:mt-16 lg:mt-20 flex flex-col md:flex-row justify-center gap-4 md:gap-10'>

                <div className='w-full md:w-80 lg:w-96 md:min-h-[350px] lg:min-h-[400px] p-5 md:p-8 lg:p-10'>
                    <div className='flex justify-center items-center min-h-24 md:min-h-28 lg:min-h-32 poppins-medium'>
                        <div className='relative'>
                            <div className='w-24 md:w-32 lg:w-40 aspect-square rounded-full overflow-hidden shadow-xl shadow-stone-400 border-2 md:border-3 lg:border-4 border-stone-400'>
                                <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dish" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5 md:mt-8 lg:mt-10'>
                        <div className='text-lg md:text-xl lg:text-2xl poppins-semibold text-red-500'>Choose Your Meal</div>
                        <div className='mt-2 md:mt-3 lg:mt-4 poppins-regular text-stone-500 text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet minus ipsam dolorem est? Reiciendis culpa porro cupiditate inventore maiores.</div>
                    </div>
                </div>

                <div className='w-full md:w-80 lg:w-96 md:min-h-[350px] lg:min-h-[400px] md:shadow-xl md:shadow-stone-400 md:border border-stone-200 rounded-t-[50px] md:rounded-t-[70px] lg:rounded-t-[90px] rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl p-5 md:p-8 lg:p-10'>
                    <div className='flex justify-center items-center min-h-24 md:min-h-28 lg:min-h-32 poppins-medium'>
                        <div className='relative'>
                            <div className='w-24 md:w-32 lg:w-40 aspect-square rounded-full overflow-hidden shadow-xl shadow-stone-400 border-2 md:border-3 lg:border-4 border-stone-400'>
                                <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dish" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5 md:mt-8 lg:mt-10'>
                        <div className='text-lg md:text-xl lg:text-2xl poppins-semibold text-red-500'>Track Your Order</div>
                        <div className='mt-2 md:mt-3 lg:mt-4 poppins-regular text-stone-500 text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet minus ipsam dolorem est? Reiciendis culpa porro cupiditate inventore maiores.</div>
                    </div>
                </div>


                <div className='w-full md:w-80 lg:w-96 md:min-h-[350px] lg:min-h-[400px] rounded-t-[50px] md:rounded-t-[70px] lg:rounded-t-[90px] rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl p-5 md:p-8 lg:p-10'>
                    <div className='flex justify-center items-center min-h-24 md:min-h-28 lg:min-h-32 poppins-medium'>
                        <div className='relative'>
                            <div className='w-24 md:w-32 lg:w-40 aspect-square rounded-full overflow-hidden shadow-xl shadow-stone-400 border-2 md:border-3 lg:border-4 border-stone-400'>
                                <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dish" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5 md:mt-8 lg:mt-10'>
                        <div className='text-lg md:text-xl lg:text-2xl poppins-semibold text-red-500'>Collect Your Meal</div>
                        <div className='mt-2 md:mt-3 lg:mt-4 poppins-regular text-stone-500 text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet minus ipsam dolorem est? Reiciendis culpa porro cupiditate inventore maiores.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks