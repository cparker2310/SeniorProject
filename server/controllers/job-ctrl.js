const jobDao = require('../models/job-model')


getJobs = async function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(await jobDao.readAll()); //send the users back to the client
    res.end(); 
}

getJobById = async function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = await jobDao.read(id);
    
    if(found !== null){ //We found the requested user
        res.status(200);
        //console.log(found.email) //200 = OK
        res.send(found); //Send the found user
    }

    else{ //The requested id does not exist
        res.status(404); //404 = Not Found
        res.send({msg:'User not found.'}); //send a message
    }
    res.end(); //ends the response (only 1 end per response)
}


createJob = function(req,res){
    let job = req.body;
    jobDao.create(job)
    res.end()
}

updateJob = async function(req, res){
    let job = req.body
    let id = req.params.id
    await jobDao.update(id, job)
    //res.redirect('/profile')
    res.end();
}

deleteJob = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    await jobDao.del(id);
    res.end();
    //}
}

/*
createJob = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a job',
        })
    }

    const job = new Job(body)

    if (!job) {
        return res.status(400).json({ success: false, error: err })
    }

    job
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: job._id,
                message: 'Job created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Job not created!',
            })
        })
}

updateJob = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Job.findOne({ _id: req.params.id }, (err, job) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Job not found!',
            })
        }
        
        job.title = body.title ? body.title : job.title
        job.companyName = body.companyName ? body.companyName : job.companyName
        job.location = body.location ? body.location : job.location
        job.type = body.type ? body.type : job.type
        job.description = body.description ? body.description : job.description
        job.isAvailable = body.isAvailable ? body.isAvailable : job.isAvailable
        job.contactName = body.contactName ? body.contactName : job.contactName
        job.contactInfo = body.contactInfo ? body.contactInfo : job.contactInfo

        job
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: job._id,
                    message: 'Job updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Job not updated!',
                })
            })
    })
}

deleteJob = async (req, res) => {
    await Job.findOneAndDelete({ _id: req.params.id }, (err, job) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!job) {
            return res
                .status(404)
                .json({ success: false, error: `Job not found` })
        }

        return res.status(200).json({ success: true, data: job })
    }).catch(err => console.log(err))
}

getJobById = async (req, res) => {
    await Job.findOne({ _id: req.params.id }, (err, job) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: job })
    }).clone().catch(err => console.log(err))
}

getJobs = async (req, res) => {
    await Job.find({}, (err, jobs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!jobs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Job not found` })
        }
        return res.status(200).json({ success: true, data: jobs })
    }).clone().catch(err => console.log(err))
}
*/




module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobs,
    getJobById
}