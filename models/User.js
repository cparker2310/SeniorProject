const mongoose= require('mongoose');
const isEmail= require('validator');
const bcrypt= require('bcrypt');

const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password length must be a minimum of 8 characters']
    },
});

userSchema.post('save', function (document, next) {
    console.log('New Profile Saved Successfully', document);
    next();
});

userSchema.pre('save', async function (next) {
    const salt= await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login= async function (email, password) {
    const user= await this.findOne({email});
    if (user)
    {
        const authenUser= await bcrypt.compare(password, user.password);
        if (authenUser)
        {
            return user;
        }
        throw Error('Password is Incorrect');
    }
    throw Error('Email is not registered');
}

const User= mongoose.model('user', userSchema)
module.exports= User;
