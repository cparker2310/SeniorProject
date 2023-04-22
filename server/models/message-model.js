const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const MessageSchema= new Schema({
    author_id: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date, 
        default: Date.now
    },
    title: {
        type: String,
        required: [true, 'Job Title is Required']
    },
    description: {
        type: String,
        required: [true, 'Description is Required']
    },
    categories: {
        type: [String],
    },
    comments: {
        type: [[String, String]],
      }
    
})

const messageModel= mongoose.model('messages', MessageSchema);



exports.readAll = async function(){
  let messages = await messageModel.find({});
  // Later try: find().sort({name:'asc'}).skip(0).limit(5);
  return messages;
}

exports.read = async function(id){
  let message = await messageModel.findOne({_id: id});
  return message;
}

exports.create = async function(newmessage){
  const message = new messageModel(newmessage);
  await message.save();
  return message;
}

exports.del = async function(id){
  let message = await messageModel.findByIdAndDelete(id);
  return message;
} 

exports.deleteAll = async function(){
  await messageModel.deleteMany();
}

exports.addComment = async function(id, addedComment){
  let message = await messageModel.findById(id)
  if(!message) return; 
  message.comments.push(addedComment)
  message.save()
}

exports.updateComment = async function(id, updatedComment, index){
  let message = await messageModel.findById(id)
  if(!message) return; 
  message.comments[index] = updatedComment
  message.save()
}

exports.deleteComment = async function(id, index){
  let message = await messageModel.findById(id)
  if(!message) return; 
  message.comments.splice(index,index)
  message.save()
  
}

exports.update = async function (id, updatedMessage){
    let message = await messageModel.findById(id)
    if(!message) return; 
    //console.log(updatedMessage)
    message.title = updatedMessage.title ? updatedMessage.title : message.title
    message.description = updatedMessage.description ? updatedMessage.description : message.description
    
    message.comments = updatedMessage.comments ? updatedMessage.comments : message.comments
    

    await message.save()
    return message
}
