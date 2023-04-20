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


createJob = async function(req,res){
    let job = req.body;
    job = await jobDao.create(job)
    if(job){
        res.status(200).send(job)
    }
    
    res.end()
}

updateJob = async function(req, res){
    let job = req.body
    let id = req.params.id
    job = await jobDao.update(id, job)
    if(job){
        res.status(200).send(job)
    }
    //res.redirect('/profile')
    res.end();
}

deleteJob = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    await jobDao.del(id);
    res.end();
    //}
}






module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobs,
    getJobById
}