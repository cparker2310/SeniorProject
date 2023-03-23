const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const JobSchema= new Schema({
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
    companyName: {
        type: String,
        required: [true, 'Company Name is Required']
    },
    location: {
        type: String,
        required: [true, 'Location is Required']
    }, 
    type: {
        type: String,
        required: [true, 'Job Type is Required']
    },
    description: {
        type: String,
        required: [true, 'Description is Required']
    },
    categories: {
        type: [String],
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    contactName: {
        type: String,
        required: [true, 'Contact Name is required']
    },
    contactInfo: {
        type: String,
        required: [true, 'Contact Information is required']
    }
})

const Job= mongoose.model('jobs', JobSchema);
module.exports= Job;