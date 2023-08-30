import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConvserationItem({ props }) {
    const navigate = useNavigate();
    return (
        <div className='con-container' onClick={() => {
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
