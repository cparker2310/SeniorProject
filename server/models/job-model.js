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

const jobModel = mongoose.model('jobs', JobSchema)

exports.readAll = async function(){
  let jobs = await jobModel.find({});
  // Later try: find().sort({name:'asc'}).skip(0).limit(5);
  return jobs;
}

exports.read = async function(id){
  let job = await jobModel.findOne({_id: id});
  return job;
}

exports.create = async function(newjob){
  const job = new jobModel(newjob);
  await job.save();
  return job;
}

exports.del = async function(id){
  let job = await jobModel.findByIdAndDelete(id);
  return job;
} 

exports.deleteAll = async function(){
  await jobModel.deleteMany();
}


exports.update = async function(id, updatedJob){
let job = await jobModel.findOne({_id: id})
if(!job) return;

job.title = updatedJob.title ? updatedJob.title : job.title
job.companyName = updatedJob.companyName ? updatedJob.companyName : job.companyName
job.location = updatedJob.location ? updatedJob.location : job.location
job.type = updatedJob.updatedJob ? updatedJob.type : job.type
job.description = updatedJob.description ? updatedJob.description : job.description
job.isAvailable = updatedJob.isAvailable ? updatedJob.isAvailable : job.isAvailable
job.contactName = updatedJob.contactName ? updatedJob.contactName : job.contactName
job.contactInfo = updatedJob.contactInfo ? updatedJob.contactInfo : job.contactInfo
job.save()
return job
}