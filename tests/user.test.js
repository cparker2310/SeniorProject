const mongoose = require("mongoose");
//const { describe } = require("node:test");
//const { default: test } = require("node:test");
const request = require("supertest");
import api from "../src/api/index" 

require("dotenv").config();
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

const EMAIL = "temp@gmail.com"
const PASSWORD = "pass1234"
const FIRST_NAME = "Molly"
const MAIDEN_NAME = "Mary"
const MARRIED_NAME = "Doe"
const CLASS_YEAR = "2010"
const CURRENT_CITY = "Philadelphia"
const CURRENT_STATE = "PA"
const UNIVERSITY_NAME = "Temple"
const DEGREE = "Masters"
const AREA_OF_STUDY = "Computer Science"
const GRAD_YEAR = "2022"
const POSITION = "Software Engineer"
const COMPANY_NAME = "Amazon"
const INDUSTRY = "CS"
const EMAIL2 = "compemail@gmail.com"
const PHONE =  "123-456-7891"

/* Connecting to the database before each test. */
beforeEach(async () => {
    //await mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    //await mongoose.connection.close();
});

test("GET /api/users", async () => {
 

      // fix this
  
      const payload = { EMAIL, PASSWORD, FIRST_NAME, MAIDEN_NAME, MARRIED_NAME,
        CLASS_YEAR, CURRENT_CITY, CURRENT_STATE, UNIVERSITY_NAME, DEGREE, AREA_OF_STUDY, GRAD_YEAR, POSITION, COMPANY_NAME, INDUSTRY, EMAIL2, PHONE }
  
      await api.insertUser(payload).then(res => {
         window.alert(`User inserted successfully`)
      })
      
      const response = await request(app)
        .get("/api/users")
        .expect('Content-Type', /json/)
      
        
      expect(response.statusCode).toBe(200);
      expect(response.body.data[response.body.data.length-1].firstName).toBe("Molly")
    });
  