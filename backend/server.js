const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()

// Middleware
app.use(cors());
app.use(express.json());

// connect DB
const connectDB = require('./config/db')
connectDB()

// config Routes
const taskRoutes = require('./router/taskRouter');
app.use('/api/tasks', taskRoutes);
const userRoutes = require('./router/userRouter');
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server running on PORT :",PORT)
})