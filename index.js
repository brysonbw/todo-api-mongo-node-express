const express = require("express")
const cors = require('cors')
const helmet = require('helmet')
const connectDB = require('./config/db')
require('dotenv').config()


// mongodb connect
connectDB()

// app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// routers

// auth router
const todoRouter = require('./routes/todo.route')


// route

// post
app.use('/api', todoRouter)



const PORT = process.env.PORT || 3007
app.listen(PORT, () => {
  console.log(`Server GOOD, running on port ${PORT}...`)
})
