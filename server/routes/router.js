const express = require('express')
const User = require ('../models/user-model')
const { isAdmin } = require('../middleware/middleware');

const UserCtrl = require('../controllers/user-ctrl')
const JobCtrl = require('../controllers/job-ctrl')

const router = express.Router()

router.post('/user', /*isAdmin*/ UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

router.post('/job', JobCtrl.createJob)
router.put('/job/:id', JobCtrl.updateJob)
router.delete('/job/:id', JobCtrl.deleteJob)
router.get('/job/:id', JobCtrl.getJobById)
router.get('/jobs', JobCtrl.getJobs)



module.exports = router