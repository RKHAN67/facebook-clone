import React from "react"; // ✅ React کو import کریں
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Route from "../constants/Route"; 
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home"; 

const ErrorBoundary = ({ withLayout }) => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error: {error?.status}</h1>
            <p>{error?.error?.message || error?.message}</p>
            <button onClick={() => window.location.href = Route.HOME.path}>
                Go Back To Home
            </button>
        </div>
    );
};

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        caseSensitive: true,
        errorElement: <ErrorBoundary withLayout={true} />,
        children: [
            {
                errorElement: <ErrorBoundary />,
                children: [
                    {
                        path: Route.HOME.path,
                        lazy: async () => {
                            const { default: Home } = await import("../pages/Home/Home");
                            return { Component: Home };
                        },
                    },
                ],
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={routes} />;
};

// ✅ Add Default Export
export default AppRoutes;
