import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <p>usman</p>
            <Outlet />
            <p>rizwan</p>
        </div>
    )
}

export default MainLayout
