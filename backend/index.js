const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

const connectDb = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log("Db is connected")
}
app.use(express.json())

connectDb()

app.listen(PORT, () => {
    console.log("Server is running")
})


app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})

app.use("/user/", userRoutes);