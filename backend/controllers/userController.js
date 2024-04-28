const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../config/generateToken')
const loginController = expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (user) {
        res.json(
            {
                _id: user._id,
                name: user.name,
                password: user.password,
                email: user.email,
                isAdmin: user.isAdmin
            }
        )
    }
    // console.log(user)
    // if (user) {
    //     res.json(
    //         {
    //             _id: user._id,
    //             name: user.name,
    //             password: user.password,
    //             email: user.email,
    //             isAdmin: user.isAdmin
    //         }
    //     )
    // }

})

const registerController = expressAsyncHandler(

    async (req, res) => {

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.send(400)
            throw Error("All necessary input fields have not been filled")
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            throw new Error("User Already Exists.")
        }

        const userNameExist = await User.findOne({ name });
        if (userNameExist) {
            throw new Error("UserName already taken")
        }

        const user = await User.create({ name, email, password });
        if (user) {
            res.status(201).json(
                {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id)
                }
            )

        }

        else {
            res.status(400)
            throw new Error("Registration Unssuccefful");
        }
    }
)



module.exports = { loginController, registerController };