const mongoose = require('mongoose')
const isEmail = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const User = new Schema(
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
      isAdmin: { type: Boolean, default: false },
      profileFinal: {type: String, required: false}
    })
/*
    User.pre('save', async function(next) {
      const salt= await bcrypt.genSalt();
      this.password= await bcrypt.hash(this.password, salt);
      next();
    });
*/

const userModel = mongoose.model('users', User)

exports.readAll = async function(){
  let users = await userModel.find({});
  // Later try: find().sort({name:'asc'}).skip(0).limit(5);
  return users;
}

exports.read = async function(id){
  let user = await userModel.findOne({_id: id});
  return user;
}

exports.create = async function(newuser){
  const user = new userModel(newuser);
  await user.save();
  return user;
}

exports.del = async function(id){
  let user = await userModel.findByIdAndDelete(id);
  return user;
} 

exports.deleteAll = async function(){
  await userModel.deleteMany();
}


exports.update = async function(id, updatedUser){
let user = await userModel.findOne({_id: id})
if(!user) return;
user.email = updatedUser.email || user.email
user.password = updatedUser.password ? updatedUser.password : user.password
user.firstName = updatedUser.firstName ? updatedUser.firstName : user.firstName
user.maidenName = updatedUser.maidenName ? updatedUser.maidenName : user.maidenName
user.marriedName = updatedUser.marriedName ? updatedUser.marriedName : user.marriedName
user.classYear = updatedUser.classYear ? updatedUser.classYear : user.classYear
user.currentCity = updatedUser.currentCity ? updatedUser.currentCity : user.currentCity
user.currentState = updatedUser.currentState ? updatedUser.currentState : user.currentState
user.universityName = updatedUser.universityName ? updatedUser.universityName : user.universityName
user.degree = updatedUser.degree ? updatedUser.degree : user.degree
user.areaStudy = updatedUser.areaStudy ? updatedUser.areaStudy : user.areaStudy
user.gradYear = updatedUser.gradYear ? updatedUser.gradYear : user.gradYear
user.position = updatedUser.position ? updatedUser.position : user.position
user.companyName = updatedUser.companyName ? updatedUser.companyName : user.companyName
user.industry = updatedUser.industry ? updatedUser.industry : user.industry
user.email2 = updatedUser.email2 ? updatedUser.email2 : user.email2
user.phone= updatedUser.phone ? updatedUser.phone : user.phone
user.isAdmin = updatedUser.isAdmin ? updatedUser.isAdmin : user.isAdmin
user.profileFinal = updatedUser.profileFinal ? updatedUser.profileFinal : user.profileFinal
user.save()
return user
}



