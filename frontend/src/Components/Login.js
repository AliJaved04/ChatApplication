import React from 'react'
import '../App.css'
import logo from '../images/logo.png'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    return (
        <div className='login-container'>
            <div className="login-logo">
                <img src={logo} alt="logo" className='welcome-logo' />
            </div>
            <div className="login-form">
                <p>Login to your Account</p>
                <div className="form">
                    <TextField id="outlined" label='Enter your Username' />
                    <TextField id="outlined-password-input" type='password' autoComplete='current-password' label="Enter your Password" />
                </div>
                <Button variant="outlined">Login</Button>
                <p className='msg'>Do not have an account?<Button style={{ marginLeft: "10px" }} variant="outlined" onClick={() =>
                    navigate("signup")}>Signup</Button></p>

            </div>
        </div >
    )
}

export default Login

