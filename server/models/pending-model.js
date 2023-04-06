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

const pendingModel = mongoose.model('pendings', Pending)

exports.readAll = async function(){
  let users = await pendingModel.find({});
  // Later try: find().sort({name:'asc'}).skip(0).limit(5);
  return users;
}

exports.read = async function(id){
  let user = await pendingModel.findOne({_id: id});
  return user;
}

exports.create = async function(newuser){
  const user = new pendingModel(newuser);
  await user.save();
  return user;
}

exports.del = async function(id){
  let user = await pendingModel.findByIdAndDelete(id);
  return user;
} 

exports.deleteAll = async function(){
  await pendingModel.deleteMany();
}