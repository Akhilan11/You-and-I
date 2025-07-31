const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// connect DB
const connectDB = require('./config/db')
connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server running on PORT :",PORT)
})