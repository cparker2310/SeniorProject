
const messageDao = require('../models/message-model')

getMessages = async function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(await messageDao.readAll()); //send the users back to the client
    res.end(); 
}

getMessageById = async function(req,res){ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = await messageDao.read(id);
    
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

createMessage = async function(req,res){
    let message = req.body;
    message = await messageDao.create(message)
    if(message){
        res.status(200).send(message)
    }
    res.end()
}


updateMessage = async function(req, res){
    let message = req.body
    //console.log(message)
    let id = req.params.id
    message = await messageDao.update(id, message)
    if(message){
        res.status(200).send(message)
    }
    //res.redirect('/profile')
    res.end();
}

deleteMessage = async function(req,res){
    let id = req.params.id; //get param and convert to int    
    await messageDao.del(id);
    res.end();
    //}
}

module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessageById,

}