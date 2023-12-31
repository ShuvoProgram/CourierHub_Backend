require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection

// Connection Listeners
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to CourierHub DATABASE'))

app.use(cors())
app.options('*', cors())
app.use(express.json())

// const apis = require('./routes/api')
app.use('/api', apis)

const port = process.env.PORT || '4545'

app.listen(port, () => console.log('Server started at port 4545'))