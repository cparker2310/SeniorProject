const express = require('express')
const User = require ('../models/user-model')

const UserCtrl = require('../controllers/user-ctrl')
const JobCtrl = require('../controllers/job-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

router.post('/job', JobCtrl.createJob)
router.put('/job/:id', JobCtrl.updateJob)
router.delete('/job/:id', JobCtrl.deleteJob)
router.get('/job/:id', JobCtrl.getJobById)
router.get('/jobs', JobCtrl.getJobs)

router.get('/users', async (request, response) => {
    try {
        const page = parseInt(request.query.page) -1 || 0
        const limit = parseInt(request.query.limit) || 5
        const search = request.query.search || ""
        let classYear = request.query.classYear || "All"

        // Eventually, we'll retrieve all class years
        const classYears = [
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
            "2015",
            "2014",
        ]

        classYear== "All"
            ? (classYear = [...classYears])
            : (classYear = request.query.classYear.split(","))

        // Search will be case sensitive
        const users = await User.find({firstName: {$regex: search, $options: "i"}})
            .where("classYear").in([...classYear]).skip(page*limit).limit(limit)

        const total = await User.countDocuments({
            classYear: {$in: [...classYear]},
            firstName: {$regex: search, $options: "i"},
        })

        const res = {
            error: false,
            total,
            page: page + 1,
            limit,
            allClassYears: classYears,
            users
        }
        
        response.status(200).json(res)

    } catch (error) {
        console.log(error);
        response.status(500).json({error: true, message: "Unable to Retrieve Directory at this Time"})

    }
})

module.exports = router