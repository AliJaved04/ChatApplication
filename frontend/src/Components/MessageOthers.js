import React from 'react'

function MessageOthers() {
    const props = { name: "Random Message", message: "This is my message", timeStamp: "12:00AM" }
    return (
        <div className="other-messages">
            <div className='con-container'>
                <p className='con-icon'>{props.name[0]}</p>
                <div className="other-text-content">
                    <p className='con-title'>{props.name}</p>
                    <p className='con-lastMessage'>{props.message}</p>
                    <p className='self-timeStamp'>{props.timeStamp}</p>
                </div>


            </div>
        </div>

    )
}

export default MessageOthers
