const mongoose = require("mongoose");
import userDao from '../models/pending-model'
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

let email = "temp@gmail.com"
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
    const users = await userDao.readAll()
    
    const id = users[users.length-1]._id
    await userDao.del(id);
    //mongoose.connection.close();
    
});
afterAll(()=>{
  mongoose.connection.close()
})


test("get user by id", async () => {
 

  // fix this

  const payload = {email, password, firstName, maidenName, marriedName,
    classYear, currentCity, currentState, universityName, degree, areaStudy, 
    gradYear, position, companyName, industry, email2, phone, isAdmin }

  await userDao.create(payload)
  var users = await userDao.readAll()
  const len = users.length

  var user = await userDao.read(users[len-1]._id)
  user = user

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
      await userDao.create(payload)
      
      const users_after = await userDao.readAll()
      const len_after = users_after.length
      
        
      expect(len_after).toBeGreaterThan(0);
      expect(users_after.firstName).not.toBe(null);


    });

   
  
    test("delete User", async () => {
      var payload = {email, password, firstName, maidenName, marriedName,
        classYear, currentCity, currentState, universityName, degree, areaStudy, 
        gradYear, position, companyName, industry, email2, phone, isAdmin }
  
      await userDao.create(payload)
      await userDao.create(payload)

      var users = await userDao.readAll()
      users = users
      var users_len = users.length
      
      await userDao.del(users[users_len-1]._id)
      var users_after = await userDao.readAll()
      
      users_after = users_after
      var users_len_after = users_after.length
      
      expect(users_len_after).toBe(users_len -1)
    })


    
    