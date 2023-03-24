const mongoose = require("mongoose");
//const { describe } = require("node:test");
//const { default: test } = require("node:test");
const request = require("supertest");
import api from "../../src/api/index" 
//import app from "../index"
require("dotenv").config();
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

var email = "temp@gmail.com"
const email_update = "updatedEmail"
const password = "pass1234"
const firstName = "Molly"
const maidenName = "Mary"
const marriedName = "Doe"
const classYear = "2010"
const currentCity = "Philadelphia"
const currentState = "PA"
const universityName = "Temple"
const degree = "Masters"
const areaStudy = "Computer Science"
const gradYear = "2022"
const position = "Software Engineer"
const companyName = "Amazon"
const industry = "CS"
const email2 = "compemail@gmail.com"
const phone =  "123-456-7891"
const isAdmin = false

/* Connecting to the database before each test. */
beforeEach(async () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
    
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    const users = await api.getAllUsers()
    
    const id = users.data.data[users.data.data.length-1]._id
    await api.deleteUserById(id);
    mongoose.connection.close();
    
});


test("get user by id", async () => {
 

  // fix this

  const payload = {email, password, firstName, maidenName, marriedName,
    classYear, currentCity, currentState, universityName, degree, areaStudy, 
    gradYear, position, companyName, industry, email2, phone, isAdmin }

  await api.insertUser(payload).then(res => {})
  var users = await api.getAllUsers()
  users = users.data.data
  const len = users.length

  var user = await api.getUserById(users[len-1]._id)
  user = user.data.data

  expect(user.firstName).toBe(firstName)
  expect(user.classYear).toBe(classYear)
  


});


test("get all users / create user", async () => {
 

      // fix this
  
      const payload = {email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree, areaStudy, 
        gradYear, position, companyName, industry, email2, phone, isAdmin }
  
      //const users_before = await api.getAllUsers()
      //const len_before = users_before.data.data.length
      await api.insertUser(payload).then(res => {})
      
      const users_after = await api.getAllUsers()
      const len_after = users_after.data.data.length
      
        
      expect(len_after).toBeGreaterThan(0);
      expect(users_after.data.data.firstName).not.toBe(null);


    });

    test("Update User by id", async () => {

      var payload = {email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree, areaStudy, 
        gradYear, position, companyName, industry, email2, phone, isAdmin }
  
      await api.insertUser(payload).then(res => {})
      
      var users_before = await api.getAllUsers()
      users_before = users_before.data.data
      var users_len = users_before.length

      email = "new_email"
      payload = {email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree, areaStudy, 
        gradYear, position, companyName, industry, email2, phone, isAdmin }

      await api.updateUserById(users_before[users_len-1]._id, payload)
      var users_after = await api.getAllUsers()

      email = "temp@gmail.com"
      users_after = users_after.data.data
      
      //expect(users_before[users_len-1].email).not.toBe("temp@gmail.com");
      expect(users_after[users_len-1].email).toBe("new_email");

    })
  
    test("delete User", async () => {
      var payload = {email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree, areaStudy, 
        gradYear, position, companyName, industry, email2, phone, isAdmin }
  
      await api.insertUser(payload).then(res => {})
      await api.insertUser(payload).then(res => {})

      var users = await api.getAllUsers()
      users = users.data.data
      var users_len = users.length
      
      await api.deleteUserById(users[users_len-1]._id)
      var users_after = await api.getAllUsers()
      
      users_after = users_after.data.data
      var users_len_after = users_after.length
      
      expect(users_len_after).toBe(users_len -1)
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
    
    