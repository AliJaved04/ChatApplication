import React, { useState } from 'react'
import User from './User'
import GroupsIcon from '@mui/icons-material/Groups';
import { useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
function Groups() {

    const lightTheme = useSelector(state => state.themeKey)
    console.log(lightTheme)
    const [groups, setGroups] = useState
        ([
            {
                name: "Group1"
            },
            {
                name: "Group2"
            },
            {
                name: "Group3"
            },
            {
                name: "Group4"
            },
            {
                name: "Group5"
            },
            {
                name: "Group6"
            },
        ]
        )
    return (

        <div className='online-users-container'>

            <div className={"ou-header " + (lightTheme ? " " : "dark")}>
                <GroupsIcon style={{ padding: "10px", width: "2rem", height: "2rem" }} />
                <p>Available Groups</p>
            </div>
            <div className={"sb-search " + (lightTheme ? " " : "dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className={"searchBox " + (lightTheme ? " " : "dark")} placeholder='Search' />
            </div>
            {groups.map((group) => {
                return <User props={group} key={group.name} />
            })}
        </div>
    )
}

export default Groups
