const express = require('express')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path')

const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 8000

app.use(express.json())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride('_method'));
app.use(cors({limit: '50mb'}))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)



  /*
const upload = multer({ storage})
app.post('/upload', upload.single('myFile'), (req, res) => {
    res.json({file:req.file});
  });*/

module.exports = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

