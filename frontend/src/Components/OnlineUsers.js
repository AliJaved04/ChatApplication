import React, { useState } from 'react'
import User from './User'
import logo from "../images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
function OnlineUsers() {
    const lightTheme = useSelector(state => state.themeKey);
    const [users, setUsers] = useState
        ([
            {
                name: "User1"
            },
            {
                name: "User2"
            },
            {
                name: "User3"
            },
            {
                name: "User4"
            },
            {
                name: "User5"
            },
            {
                name: "User6"
            },
        ]
        )
    return (

        <div className='online-users-container'>

            <div className={"ou-header " + (lightTheme ? " " : "dark")}>
                <PersonIcon style={{ padding: "10px", width: "2rem", height: "2rem" }} />
                <p>Online Users</p>
            </div>
            <div className={"sb-search " + (lightTheme ? "" : "dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className={"searchBox " + (lightTheme ? "" : "dark")} placeholder='Search' />
            </div>
            <div className="users" >
                {users.map((user) => {
                    return <User props={user} key={user.name} />
                })}
            </div>

        </div>
    )
}

export default OnlineUsers
