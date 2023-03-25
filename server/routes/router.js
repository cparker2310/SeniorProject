const express = require('express')
const User = require ('../models/user-model')
const { isAdmin } = require('../middleware/middleware');

const UserCtrl = require('../controllers/user-ctrl')
const JobCtrl = require('../controllers/job-ctrl')
const PendingCtrl = require('../controllers/pending-ctrl')

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

module.exports = router