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
    let newuser = {}; //empty obj
    newuser.name = req.body.txt_name;
    newuser.login = req.body.txt_login;
    newuser.password = passUtil.hashPassword(req.body.txt_pass);
    newuser.permission = parseInt(req.body.txt_perm);

    if(req.body.txt_id){
        //update user
        console.log('Update user');
        userDao.update(newuser);
    }
    else{
        //insert user
        userDao.create(newuser);        
    }
    res.redirect('users.html');
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
/*
exports.login = async function(req, res){
    let plogin = req.body.txt_login;
    let pwd = passUtil.hashPassword(req.body.txt_pass);
    let user = await userDao.login(plogin, pwd);
    console.log(user);
    if(user != null){ //login successful
        user.password = null; //for security
        //Save the user in the session
        //req.session.user = user;
        res.redirect('index.html');
    }
    else{ //incorrect login or password
        res.redirect('login.html?error=1');
    }
}
*/
/*
createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}


updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        
        user.email = body.email ? body.email : user.email
        user.password = body.password ? body.password : user.password
        user.firstName = body.firstName ? body.firstName : user.firstName
        user.maidenName = body.maidenName ? body.maidenName : user.maidenName
        user.marriedName = body.marriedName ? body.marriedName : user.marriedName
        user.classYear = body.classYear ? body.classYear : user.classYear
        user.currentCity = body.currentCity ? body.currentCity : user.currentCity
        user.currentState = body.currentState ? body.currentState : user.currentState
        user.universityName = body.universityName ? body.universityName : user.universityName
        user.degree = body.degree ? body.degree : user.degree
        user.areaStudy = body.areaStudy ? body.areaStudy : user.areaStudy
        user.gradYear = body.gradYear ? body.gradYear : user.gradYear
        user.position = body.position ? body.position : user.position
        user.companyName = body.companyName ? body.companyName : user.companyName
        user.industry = body.industry ? body.industry : user.industry
        user.email2 = body.email2 ? body.email2 : user.email2
        user.phone= body.phone ? body.phone : user.phone
        user.isAdmin = body.isAdmin ? body.isAdmin : user.isAdmin
        user.profileFinal = body.profileFinal ? body.profileFinal : user.profileFinal

        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                    
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
    
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).clone().catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).clone().catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).clone().catch(err => console.log(err))
}


/*export const getUserBySearch= async (req, res) => {
    const { searchQuery } = req.query

    try {
        const name= new RegExp(searchQuery, 'i')
        const user= await User.find({ $or: [ { name } ]});
        res.json({ data: user })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

*/
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    //getUserBySearch
}