const mongoose = require("mongoose");
//const { describe } = require("node:test");
//const { default: test } = require("node:test");
const request = require("supertest");
const app = require("../server/index");

require("dotenv").config();
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

const EMAIL = "temp@gmail.com"
const PASSWORD = "pass1234"
const FIRST_NAME = "Molly"
const MAIDEN_NAME = "Mary"
const MARRIED_NAME = "Doe"
const CLASS_YEAR = 2010
const CURRENT_CITY = "Philadelphia"
const CURRENT_STATE = "PA"
const UNIVERSITY_NAME = "Temple"
const DEGREE = "Masters"
const AREA_OF_STUDY = "Computer Science"
const GRAD_YEAR = 2022
const POSITION = "Software Engineer"
const COMPANY_NAME = "Amazon"
const INDUSTRY = "CS"
const EMAIL2 = "compemail@gmail.com"

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

test("GET /api/users", async () => {
  
      const token = await request(app).post("/api/user").send({
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        firstName: process.env.FIRST_NAME,
        lastName: process.env.LAST_NAME,
        maidenName: process.env.MAIDEN_NAME,
        classYear: process.env.CLASS_YEAR,
        currentCity: process.env.CURRENT_CITY,
        currentState: process.env.CURRENT_STATE,
        universityName: process.env.UNIVERSITY_NAME,
        degree: process.env.DEGREE,
        areaStudy : process.env.AREA_OF_STUDY,
        gradYear: process.env.GRAD_YEAR,
        position: process.env.POSITION,
        companyName: process.env.COMPANY_NAME,
      });
  
      const response = await request(app)
        .get("/api/users")
        .set({
          Authorization: "bearer " + token.body.token,
          "Content-Type": "application/json",
        });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  