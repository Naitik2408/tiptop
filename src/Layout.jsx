import React from 'react'
import Navbar from './compomnets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './compomnets/Footer'

function Layout() {
    return (
        <div className='bg-stone-50 min-h-screen text-stone-700'>
            <Navbar />
            <div className='py-10'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout