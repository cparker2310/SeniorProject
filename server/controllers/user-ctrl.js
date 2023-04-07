const userDao = require('../models/user-model');

getUsers = async function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(await userDao.readAll()); //send the users back to the client
    res.end(); 
}

getUserById = async function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = await userDao.read(id);
    
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

createUser = function(req,res){
    let user = req.body;
    if(user){
        userDao.create(user)
    }
    
    res.end()
}

updateImageIndex = async function (req, res){
    let index = await userDao.maxIndex()
    res.send(index)
    res.end()
}

updateUser = async function(req, res){
    let user = req.body
    let id = req.params.id
    await userDao.update(id, user)
    //res.redirect('/profile')
    res.end();
}

deleteUser = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    await userDao.del(id);
    res.end();
    //}
}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    updateImageIndex
}