import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import HomePage from './assets/components/HomePage.jsx'
import Destination from './assets/components/Destination.jsx'
import Crew from './assets/components/Crew.jsx'
import Technology from './assets/components/Technology.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/destination',
        element: <Destination />
    },
    {
        path: '/crew',
        element: <Crew />
    },
    {
        path: '/technology',
        element: <Technology />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)