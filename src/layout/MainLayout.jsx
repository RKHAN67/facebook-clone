import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

const MainLayout = () => {
    return (
        <div>
            <div className='fixed w-full'>
                <Header />
            </div>
            <div className='pt-16'>
                <Outlet />
            </div>
            {/* <p>rizwan</p> */}
        </div>
    )
}

export default MainLayout
