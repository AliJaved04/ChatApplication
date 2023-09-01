import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
function User({ props }) {
    const lightTheme = useSelector(state => state.themeKey)
    return (
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"user-style " + (lightTheme ? " " : "dark")}>
            <p className='con-icon'>{props.name[0]}</p>
            <p className='con-title'>{props.name}</p>
        </motion.div>
    )
}

export default User
