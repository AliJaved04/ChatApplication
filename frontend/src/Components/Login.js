import React, { useState } from 'react'
import '../App.css'
import axios from "axios"
import logo from '../images/logo.png'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({ name: " ", password: " " });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const login = async () => {
        try {
            const config = {
                headers:
                {
                    "Content-type": "application/json"
                }
            }

            const response = await axios.post("http://localhost:5000/user/login", data, config);
            if (response.status === 200) {
                toast.success("Login Successful")
                localStorage.setItem("token", response.data.token)
                navigate("/app")

            }

        }
        catch (error) {
            if (error.response.status === 401) {
                toast.error("Invalid Username or Password")
            }
        }
    }

    return (
        <div className='login-container'>
            <Toaster richColors closeButton={true} position='top-right' />
            <div className="login-logo">
                <img src={logo} alt="logo" className='welcome-logo' />
            </div>
            <div className="login-form">
                <p>Login to your Account</p>
                <div className="form">
                    <TextField id="outlined" name="name" label='Enter your Username' onChange={changeHandler} />
                    <TextField id="outlined-password-input" type='password' name='password' onChange={changeHandler} label="Enter your Password" />
                </div>
                <Button variant="outlined" onClick={login}>Login</Button>
                <p className='msg'>Do not have an account?<Button style={{ marginLeft: "10px" }} variant="outlined" onClick={() =>
                    navigate("signup")}>Signup</Button></p>

            </div>
        </div >
    )
}

export default Login

