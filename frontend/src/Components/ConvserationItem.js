import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function ConvserationItem({ props }) {
    const lightTheme = useSelector(state => state.themeKey)
    const navigate = useNavigate();
    return (
        <div className={"con-container " + (lightTheme ? "" : "dark")} onClick={() => {
            navigate("chatArea")
        }}>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
            <p className='con-lastMessage'>{props.lastMessage}</p>
            <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
    )
}

export default ConvserationItem
