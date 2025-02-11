import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { About } from '../pages/about'
import { route } from '../constant/route'
import Home from '../pages/Home'

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: route.HOME.path,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    }
])


const Router = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default Router
