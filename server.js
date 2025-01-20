const express = require('express')
const todRoutes = require('./routes/todoRoutes')
const app = express()
const cors = require('cors')
const connect = require('./config/db')
require('dotenv').config()

const port = process.env.port || 4000

connect()

app.use(cors())
app.use(express.json())
app.use('/api',todRoutes)

app.listen(port, () => {
    console.log(`we are listening our server at ${port}`)
})