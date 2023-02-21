const User= require('../models/User');
const jwt= require('jsonwebtoken');

const evaluateErrors= (error) => {
    console.log(error.message, error.code);
    let errors= {email: '', password: ''};

    if (error.message=== 'incorrect email') 
    {
        errors.email= 'Email is not registered';
    }

    if (error.message=== 'incorrect password') 
    {
        errors.password= 'Password is Incorrect';
    }

    if (error.code== 11000) {
        errors.email= 'Email is already in use';
        return errors;
    }

    if (error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path]= properties.message;
        });
    }
    return errors;
}

const maxAgeJwt= 3*24*60*60;
const tokens= (jwtID) => {
    return jwt.sign({jwtID}, 'secret', {
        expiresIn: maxAgeJwt
    });
}

module.exports.signup_get= (request, response) => {
    response.render('signup');
}

module.exports.login_get= (request, response) => {
    response.render('login');
}

module.exports.signup_post= async (request, response) => {
    const {email, password}= request.body;
    
    try {
        const user= await User.create({email, password});
        const token= tokens(user._id);
        response.cookie('jwt', token, {httpOnly: true, maxAge: maxAgeJwt*1000});
        response.status(201).json({user: user._id});
    }
    catch (error) {
        const errors= evaluateErrors(error);
        response.status(400).json({errors});
    }
}

module.exports.login_post= async (request, response) => {
    const {email, password}= request.body;

    try {
        const user= await User.login(email, password);
        const token= tokens(user._id);
        response.cookie('jwt', token, {httpOnly: true, maxAge: maxAgeJwt*1000});
        response.status(200).json({user: user._id});
    }
    catch (error) {
        const errors= evaluateErrors(error);
        response.status(400).json({errors});
    }
}

module.exports.logout_get= (request, response) => {
    response.cookie('jwt', '', {maxAge: 1});
    response.redirect('/');
}