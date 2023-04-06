const pendingDao = require('../models/pending-model');

getPendings = async function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(await pendingDao.readAll()); //send the users back to the client
    res.end(); 
}

getPendingById = async function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = await pendingDao.read(id);
    
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

createPending = function(req,res){
    let user = req.body;
    pendingDao.create(user)
    res.end()
}

deletePending = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    await pendingDao.del(id);
    res.end();
    //}
}





module.exports = {
    createPending,
    deletePending,
    getPendings,
    getPendingById,
}