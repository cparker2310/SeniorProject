const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const User = require('./models/user-model')

const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 8000

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true ,limit: '50mb', parameterLimit:50000}))
app.use(cors({limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const Storage = multer.diskStorage({
    destination: 'uploaded images',
    filename: (req, res, cb) => {
        cb(null, file.orginalname)
    }
})

const uploadImage = multer({
    storage: Storage
}).single('testImage')


app.use('/api', router)

app.post('/upload', (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new User({
                name: req.body.name,
                image: { data: req.file.filename, contentType: 'image/png'}
            })
            newImage.save().then(() => res.send('Image Successfully Uploaded')).catch((err) => console.log(err))
        }
    })
})

module.exports = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

