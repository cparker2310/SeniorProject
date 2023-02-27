const mongoose= require('mongoose');
const User= require('../models/User');

const getAllUsers= async (request, response) => {
    const users= await User.find({}).sort({createdAt: -1})
    response.status(200).json(users);
}

const deleteProfile= async (request, response) => {
    const { id } = request.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({error: 'User does not exist'})
    }

    const user= await User.findOneAndDelete({_id: id})

    if(!user) {
      return response.status(400).json({error: 'User does not exist'})
    }
  
    response.status(200).json(user)
}

const updateProfile= async (request, response) => {
    const { id } = request.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({error: 'User does not exist'})
    }
  
    const user= await User.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!user) {
      return response.status(400).json({error: 'User does not exist'})
    }
  
    res.status(200).json(user)
  }

module.exports= {
    getAllUsers,
    deleteProfile,
    updateProfile
}