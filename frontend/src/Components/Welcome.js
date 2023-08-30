import React from 'react'
import logo from '../images/logo.png'
function Welcome() {
    return (
        <div className='welcome-container'>
            <img src={logo} alt="logo" className='welcome-logo' />
            <p>View and text directly people directly present in the chat room</p>
        </div>
    )
}

export default Welcome
