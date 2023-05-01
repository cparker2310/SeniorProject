const userDao = require('../models/user-model');

getUsers = async function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(await userDao.readAll()); //send the users back to the client
    res.end(); 
}
/*
login = async function(req,res){
    
        let plogin = req.body.email;
        let pwd = req.body.password;
        
        let user = await userDao.login(plogin, pwd);
        //console.log(user);
        if(user != null){ //login successful
            res.send(user)
            res.status(200)
        }
    res.end()
    
}
*/
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

createUser = async function(req,res){
    let user = req.body;
    if(user){
        let createdUser = await userDao.create(user)
        res.status(200).send(createdUser);
    }
    //res.send(user)
    res.end()
}

updateUser = async function(req, res){
    let user = req.body;
    let id = req.params.id;
    user = await userDao.update(id, user)
    if(user){
        res.status(200).send(user)
    }
    res.end();
}

deleteUser = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    let deleted = await userDao.del(id);
    if(deleted){
        res.status(200).send(deleted)
    }
    res.end();
    //}
}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    
}