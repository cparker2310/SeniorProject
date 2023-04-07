const mongoose = require("mongoose");
const request = require("supertest");
import jobDao from '../models/job-model'
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

var author_id = "temp_id"
const title = "updatedEmail"
const dateCreated = Date.now()
const companyName = "Amazon"
var location = "Onsite"
const type = "Remote"
const description = "..."
const categories =  ["STEM"]
var contactName = "joe"
var contactInfo = "joeemail"

/* Connecting to the database before each test. */
beforeEach(async () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
    
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    const jobs = await jobDao.readAll()
    
    const id = jobs[jobs.length-1]._id
    await jobDao.del(id);
    //mongoose.connection.close();
    
});
afterAll(()=>{
  mongoose.connection.close()
})


test("get user by id", async () => {
 

  // fix this

  const payload = {author_id, location, dateCreated, title, companyName, type, description, categories, contactName, contactInfo}

  await jobDao.create(payload)
  var jobs = await jobDao.readAll()
  const len = jobs.length

  var job = await jobDao.read(jobs[len-1]._id)

  expect(job.type).toBe(type)
  expect(job.contactName).toBe(contactName)


});


test("get all users / create user", async () => {
 

      // fix this
  
      const payload = {author_id, location, dateCreated, title, companyName, type, description, categories, contactName, contactInfo}
  
      //const users_before = await api.getAllUsers()
      //const len_before = users_before.data.data.length
      await jobDao.create(payload)
      
      const jobs_after = await jobDao.readAll()
      const len_after = jobs_after.length
      
        
      expect(len_after).toBeGreaterThan(0);
      expect(jobs_after.contactInfo).not.toBe(null);


    });

    test("Update User by id", async () => {

      var payload = {author_id, location, dateCreated, title, companyName, type, description, categories, contactName, contactInfo}
  
      await jobDao.create(payload)
      
      var jobs_before = await jobDao.readAll()
      var jobs_len = jobs_before.length

      contactInfo = "new_email"
      //var pay = {"email":"new_email"}
      payload = {author_id, location, dateCreated, title, companyName, type, description, categories, contactName, contactInfo}
      await jobDao.update(jobs_before[jobs_len-1]._id, payload)
      var jobs_after = await jobDao.readAll()

      //email = "temp@gmail.com"
      
      //expect(users_before[users_len-1].email).not.toBe("temp@gmail.com");
      expect(jobs_after[jobs_len-1].contactInfo).toBe("new_email");

    })
  
    test("delete User", async () => {
      const payload = {author_id, location, dateCreated, title, companyName, type, description, categories, contactName, contactInfo}
  
      await jobDao.create(payload)
      await jobDao.create(payload)

      var jobs = await jobDao.readAll()
      var jobs_len = jobs.length
      
      await jobDao.del(jobs[jobs_len-1]._id)
      var jobs_after = await jobDao.readAll()
      
      var jobs_len_after = jobs_after.length
      
      expect(jobs_len_after).toBe(jobs_len -1)
    })


    
    