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
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxlength: [100]
    },
    maidenName: {
        type: String,
        required: [true, 'Maiden name is required'],
        maxlength: [100]
    },
    lastName: {
        type: String,
        maxlength: [100]
    },
    classYear: {
        type: String,
        required: [true, 'Class Year is required'],
        maxlength: [4]
    },
    currentCity: {
        type: String,
        maxlength: [100]
    },
    currentState: {
        type: String,
        maxlength: [100]
    },
    universityName1: {
        type: String,
        maxlength: [100]
    },
    degree1: {
        type: String,
        maxlength: [100]
    },
    areaOfStudy1: {
        type: String,
        maxlength: [100]
    },
    graduationYear1: {
        type: String,
        maxlength: [100]
    },
    universityName2: {
        type: String,
        maxlength: [100]
    },
    degree2: {
        type: String,
        maxlength: [100]
    },
    areaOfStudy2: {
        type: String,
        maxlength: [100]
    },
    graduationYear2: {
        type: String,
        maxlength: [100]
    },
    universityName3: {
        type: String,
        maxlength: [100]
    },
    degree3: {
        type: String,
        maxlength: [100]
    },
    areaOfStudy3: {
        type: String,
        maxlength: [100]
    },
    graduationYear3: {
        type: String,
        maxlength: [100]
    },
    career: {
        type: String,
        maxlength: [100]
    },
    companyName: {
        type: String,
        maxlength: [100]
    },
    industry: {
        type: String,
        maxlength: [100]
    },
    phone: {
        type: String,
        maxlength: [100]
    }
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

userSchema.deleteProfile = async function(document, next) {
    const result = ("node-auth").collection("user").deleteMany(User._id);
    console.log("Profile successfully deleted", document);
    next();
}

const User= mongoose.model('user', userSchema);
module.exports= User;
