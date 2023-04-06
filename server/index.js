const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 8000

app.use(express.json())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({limit: '50mb'}))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)



module.exports = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

