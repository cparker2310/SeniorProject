const mongoose = require("mongoose");
//const { describe } = require("node:test");
//const { default: test } = require("node:test");
const request = require("supertest");
import api from "../../src/api/index" 
//import app from "../index"
require("dotenv").config();
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

var author_id = "temp_id"
const title = "updatedEmail"
const companyName = "Amazon"
const type = "Remote"
const description = "..."
const categories =  ["STEM"]
const contactName = "joe"
const contactInfo = "joeemail"



/* Connecting to the database before each test. */
beforeEach(async () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
    
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    const jobs = await api.getAllJobs()
    
    const id = jobs.data.data[jobs.data.data.length-1]._id
    await api.deleteJobById(id);
    mongoose.connection.close();
    
});


test("get job by id", async () => {
 

  // fix this

  const payload = {author_id, title, companyName, type, description, categories, contactName, contactInfo}

  await api.insertUser(payload).then(res => {})
  var jobs = await api.getAllJobs()
  jobs = jobs.data.data
  const len = jobs.length

  var job = await api.getJobById(jobs[len-1]._id)
  job = job.data.data

  expect(job.contactInfo).toBe(contactInfo)
  expect(job.contactName).toBe(contactName)
  


});


test("get all jobs / create job", async () => {
 

      // fix this
  
      const payload = {author_id, title, companyName, type, description, categories, contactName, contactInfo}
  
      //const users_before = await api.getAllUsers()
      //const len_before = users_before.data.data.length
      await api.insertJob(payload).then(res => {})
      
      const jobs_after = await api.getAllJobs()
      const len_after = jobs_after.data.data.length
      
        
      expect(len_after).toBeGreaterThan(0);
      expect(jobs_after.data.data.author_id).not.toBe(null);


    });

    test("Update job by id", async () => {

    const payload = {author_id, title, companyName, type, description, categories, contactName, contactInfo}

      await api.insertJob(payload).then(res => {})
      
      var jobs_before = await api.getAllJobs()
      jobs_before = jobs_before.data.data
      var jobs_len = jobs_before.length

      author_id = "new_id"
      payload = {author_id, title, companyName, type, description, categories, contactName, contactInfo}
      await api.updateUserById(jobs_before[jobs_len-1]._id, payload)
      var jobs_after = await api.getAllJobs()

      author_id = "temp_id"
      jobs_after = jobs_after.data.data
      
      //expect(users_before[users_len-1].email).not.toBe("temp@gmail.com");
      expect(jobs_after[jobs_len-1].author_id).toBe("new_id");

    })
  
    test("delete job", async () => {
    const payload = {author_id, title, companyName, type, description, categories, contactName, contactInfo}
  
      await api.insertJob(payload).then(res => {})
      await api.insertJob(payload).then(res => {})

      var jobs = await api.getAllJobs()
      jobs = jobs.data.data
      var jobs_len = jobs.length
      
      await api.deleteJobById(jobs[jobs_len-1]._id)
      var jobs_after = await api.getAllJobs()
      
      jobs_after = jobs_after.data.data
      var jobs_len_after = jobs_after.length
      
      expect(jobs_len_after).toBe(jobs_len -1)
    })

/*
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          email: 'john.doe@example.com',
          password: 'testpassword',
          firstName: 'John Doe',
          maidenName: 'Marie',
          marriedName: "Parker",
          classYear: "2021",
          currentCity: "Baltimore",
          currentState:"PA",
          universityName: "Yes",
          degree: "ma",
          areaStudy: "CS",
          gradYear: "2011",
          position: "intern",
          companyName: "NA",
          industry: "na",
          email2: "na",
          phone: "na",
          isAdmin: false
        })
        .expect(201);
        
        expect(response.body).toHaveProperty('_id');
          expect(response.body).toHaveProperty('name', 'John Doe');
          expect(response.body).toHaveProperty('email', 'john.doe@example.com');
          expect(response.body).not.toHaveProperty('password');
      })
*/
    
    