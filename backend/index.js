const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const cors = require("cors")
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

const connectDb = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log("Db is connected")
}
app.use(express.json())
app.use(cors())
connectDb()

app.listen(PORT, () => {
    console.log("Server is running")
})


app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})

app.use("/user", userRoutes);