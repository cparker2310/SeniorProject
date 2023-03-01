const mongoose = require('mongoose')
const isEmail= require('validator');
const Schema = mongoose.Schema

const User = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        maidenName: { type: String, required: false },
        lastName: { type: String, required: false },
        classYear: {type: Number, required: true },
        currentCity: { type: String, required: false},
        currentState: { type: String, required: false},
        universityName: {type: String, required: false},
        degree: {type: String, required: false},
    })
     


module.exports = mongoose.model('users', User)