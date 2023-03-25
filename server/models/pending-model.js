const mongoose = require('mongoose')
const isEmail = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const Pending = new Schema(
    {
      email: { type: String, required: true }, //validate: [isEmail, 'Please enter a valid email'] },
      password: { type: String, required: true }, //minlength: [8, 'Password length must be a minimum of 8 characters'] },
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
      phone: { type: String, required: false },
      //imageName: { type: String, required: true },
      //image: { data: Buffer, contentType: String }
      isAdmin: { type: Boolean, default: false }
    })
/*
    Pending.pre('save', async function(next) {
      const salt= await bcrypt.genSalt();
      this.password= await bcrypt.hash(this.password, salt);
      next();
    });
*/

module.exports = mongoose.model('pendings', Pending)
