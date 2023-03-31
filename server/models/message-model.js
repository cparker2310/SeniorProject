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
})

const Message= mongoose.model('messages', MessageSchema);
module.exports= Message;