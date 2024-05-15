import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'


const RouteLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RouteLayout