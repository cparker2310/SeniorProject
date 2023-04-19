const mongoose = require('mongoose')
const express = require('express')
const crypto = require('crypto')
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path')
const multer = require('multer');
const UserCtrl = require('../controllers/user-ctrl')
const JobCtrl = require('../controllers/job-ctrl')
const PendingCtrl = require('../controllers/pending-ctrl')
const MessageCtrl = require('../controllers/message-ctrl')
const db = require('../db');
const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)


router.post('/pending', PendingCtrl.createPending)
router.delete('/pending/:id', PendingCtrl.deletePending)
router.get('/pending/:id', PendingCtrl.getPendingById)
router.get('/pendings', PendingCtrl.getPendings)

router.post('/job', JobCtrl.createJob)
router.put('/job/:id', JobCtrl.updateJob)
router.delete('/job/:id', JobCtrl.deleteJob)
router.get('/job/:id', JobCtrl.getJobById)
router.get('/jobs', JobCtrl.getJobs)

router.post('/message', MessageCtrl.createMessage)
router.put('/message/:id', MessageCtrl.updateMessage)
router.delete('/message/:id', MessageCtrl.deleteMessage)
router.get('/message/:id', MessageCtrl.getMessageById)
router.get('/messages', MessageCtrl.getMessages)

let gfs;
db.once('open', () => {
    // Init stream
    let gridfsBucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: 'uploads'
    });
    gfs = Grid(db, mongoose.mongo);  
    gfs.collection('uploads');
  });

const dbURI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp';
const storage = new GridFsStorage({
    url: dbURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        
          const filename = file.originalname 
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }})
    

const upload = multer({ storage })
router.post('/upload/:user_id', upload.single('myFile'), (req, res) => {
    
    //res.json({file:req.file});
    res.status(204).send();
   //res.redirect('http://localhost:3000/profile')
    
  });

router.get('/upload/:user_id', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      if(!files){
        return res.status(404).json({
          err: "No files exist"
        })
      }
      else{
        return res.json(files)
      }
    })
    //{ file.author_id: req.params.user_id}
    
  })


router.get('/image/:filename', (req,res) => {
  gfs.files.findOne({filename: req.params.filename},  (err, file) => {
    if (err) {
      return reject(err);
    
    }
    if(!file){
      return res.status(404).json({
        err: "No File Exist"
      })
    }
    else{
      //console.log("files - ", file)
      const readstream = gridfsBucket.openDownloadStream(file._id)
      readstream.pipe(res)
    }
  })});
  
    
    

  




module.exports = router