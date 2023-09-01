import React from 'react'
import logo from '../images/logo.png'
import { useSelector } from 'react-redux'
function Welcome() {
    const lightTheme = useSelector(state => state.themeKey);
    return (
        <div className={"welcome-container " + (lightTheme ? "" : "dark")}>
            <img src={logo} alt="logo" className='welcome-logo' />
            <p>View and text directly people directly present in the chat room</p>
        </div>
    )
}

export default Welcome
