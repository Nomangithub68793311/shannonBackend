const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const socket = require('socket.io')
dotenv.config()
const connectDB = require('./database/connection')
const Router = require('./routes/routesNames')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
///connecting to database
connectDB()
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`listening to port${port}`)

})
app.use(Router)
