import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import { useSelector } from 'react-redux';
import MessageSelf from './MessageSelf';
function ChatArea() {

    const lightTheme = useSelector(state => state.themeKey)
    const props = {
        name: "User1",
        lastMessage: "Last Message",
        timeStamp: 'today'

    }



    return (
        <div className={"chat-area " + (lightTheme ? "" : "dark")}>
            <div className={"ca-header " + (lightTheme ? "" : "dark")}>

                <div className={"ca-header-left " + (lightTheme ? "" : "dark")}>
                    <p className='con-icon'>{props.name[0]}</p>
                    <div className='ca-header-left-b'>
                        <p className='con-title'>{props.name}</p>
                        <p className='con-timeStamp'>{props.timeStamp}</p>
                    </div>
                </div>

                <div>
                    <IconButton>
                        <DeleteOutlineIcon className={"icon " + (lightTheme ? "" : "dark")} />
                    </IconButton>

                </div>
            </div>
            <div className={"ca-messages " + (lightTheme ? "" : "dark")}>

                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf /> <MessageOthers />
                <MessageSelf />
            </div>
            <div className={"ca-searchBox " + (lightTheme ? "" : "dark")}>
                <input type="text" placeholder='Type a message' className={"searchBox " + (lightTheme ? "" : "dark")} />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea
