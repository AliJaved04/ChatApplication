import React from 'react'
import { useSelector } from 'react-redux'

function User({ props }) {
    const lightTheme = useSelector(state => state.themeKey)
    return (
        <div className={"user-style " + (lightTheme ? " " : "dark")}>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
        </div>
    )
}

export default User
