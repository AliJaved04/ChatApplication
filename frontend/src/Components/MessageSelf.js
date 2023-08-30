import React from 'react'

function MessageSelf() {
    const props = { message: "This is my message", timeStamp: "12:00AM" }
    return (
        <div className='self-messages'>
            <div className="messageBox">
                <p className='con-lastMessage'>{props.message}</p>
                <p className='self-timeStamp'>{props.timeStamp}</p>
            </div>

        </div>
    )
}

export default MessageSelf
