const User = require('../models/user-model')

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





module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}