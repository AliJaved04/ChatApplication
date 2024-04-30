import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import logo from '../images/logo.png'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
function SignUp() {
    const [data, setData] = useState({ name: " ", email: " ", password: " " });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const isEmpty = () => {
        return Object.values(data).some(value => value === " ");
    };
    const signUp = async () => {
        if (!isEmpty()) {
            try {
                const config = {
                    headers:
                    {
                        "Content-type": "application/json"
                    }
                }

                const response = await axios.post("http://localhost:5000/user/register", data, config);
                if (response.status === 201) {
                    toast.success("Account registered successfully")
                }
            }
            catch (error) {
                console.log(error)
                if (error.response.status === 500) {
                    toast.error("User already exists")
                }
            }
        }
    }
    const navigate = useNavigate();
    return (
        <div className='login-container'>
            <Toaster richColors closeButton={true} position='top-right' />
            <div className="login-logo">
                <img src={logo} alt="logo" className='welcome-logo' />
            </div>
            <div className="login-form">
                <p>Create your Account</p>
                <div className="form">
                    <TextField id="outlined" name="name" onChange={changeHandler} label='Enter your Username' />
                    <TextField id="outlined" name="email" onChange={changeHandler} label='Enter Email Address' />
                    <TextField id="outlined-password-input" name='password' onChange={changeHandler} type='password' autoComplete='current-password' label="Enter your Password" />
                </div>
                <Button variant="outlined" onClick={signUp}>Sign Up</Button>
                <p className='msg'>Already have an account?<Button style={{ marginLeft: "10px" }} variant="outlined" onClick={() =>
                    navigate("/")}>Login</Button></p>
            </div>
        </div>
    )
}

export default SignUp

