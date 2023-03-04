const mongoose = require('mongoose')
const isEmail= require('validator');
const Schema = mongoose.Schema

const User = new Schema(
    {
       email: { type: String, required: true },
      password: { type: String, required: true },
      firstName: { type: String, required: true },
      maidenName: { type: String, required: true },
      marriedName: { type: String, required: false },
      classYear: { type: String, required: true },
      currentCity: { type: String, required: false },
      currentState: { type: String, required: false },
      universityName: { type: String, required: false },
      degree: { type: String, required: false },
      areaStudy: { type: String, required: false },
      gradYear: { type: String, required: false },
      position: { type: String, required: false },
      companyName: { type: String, required: false },
      industry: { type: String, required: false },
      email2: { type: String, required: false },
      phone: { type: String, required: false }
    })

    User.statics.login= async function (email, password) {
      const user= await this.findOne({email});
      if (user)
      {
          await /*bycrpt*/compare(password, user.password);
          return user;
          //throw Error('Password is Incorrect');
      }
      throw Error('Email is not registered');
  }

module.exports = mongoose.model('users', User)