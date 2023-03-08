const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const JobSchema= new Schema({
    title: {
        type: String,
        required: [true, 'Job Title is Required']
    },
    location: {
        type: String,
        required: [true, 'Job Title is Required']
    }, 
    jobType: {
        type: String,
        required: [true, 'Job Title is Required']
    },
    description: {
        type: String,
        required: [true, 'Job Title is Required']
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

const Job= mongoose.model('jobs', JobSchema);
module.exports= Job;