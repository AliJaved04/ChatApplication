import React from 'react'
import '../App.css'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function MainContainer() {
    const lightTheme = useSelector(state => state.themeKey)
    return (
        <div className={"main-container " + (lightTheme ? "" : "dark")}>
            <Sidebar />
            <Outlet />

        </div>
    )
}
