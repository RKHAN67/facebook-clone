import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const MainLayout = () => {
    return (
        <div>
            <div><Header /></div>
            <div className='pt-10'>
            <Outlet />
            </div>
            <p>rizwan</p>
        </div>
    )
}

export default MainLayout
