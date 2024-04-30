import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
function User({ props }) {
    const lightTheme = useSelector(state => state.themeKey)
    const { usersData, setUsersData } = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/user/fetchUsers', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((data) => {
            setUsersData([...usersData, data.data]);
        })

    }, []
    )
    return (
        <div className={"user-style " + (lightTheme ? " " : "dark")}>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
        </div>
    )
}

export default User
