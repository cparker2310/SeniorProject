const mongoose = require("mongoose");
const request = require("supertest");
import messageDao from '../models/message-model'
const MONGODB_URI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp'

var author_id = "temp_id"
var title = "title"
const dateCreated = Date.now()
const description = "..."
const categories =  ["STEM"]

/* Connecting to the database before each test. */
beforeEach(async () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
    
  });
  
  /* Closing database connection after each test. */
afterEach(async () => {
    const messages = await messageDao.readAll()
    
    const id = messages[messages.length-1]._id
    await messageDao.del(id);
    //mongoose.connection.close();
    
});
afterAll(()=>{
  mongoose.connection.close()
})


test("get user by id", async () => {
 

  // fix this

  const payload = {author_id, dateCreated, title, description, categories}

  await messageDao.create(payload)
  var messages = await messageDao.readAll()
  const len = messages.length

  var message = await messageDao.read(messages[len-1]._id)

  expect(message.title).toBe(title)
  expect(message.author_id).toBe(author_id)


});


test("get all users / create user", async () => {
 

      // fix this
  
      const payload = {author_id, dateCreated, title, description, categories}  
      //const users_before = await api.getAllUsers()
      //const len_before = users_before.data.data.length
      await messageDao.create(payload)
      
      const messages_after = await messageDao.readAll()
      const len_after = messages_after.length
      
        
      expect(len_after).toBeGreaterThan(0);
      expect(messages_after.title).not.toBe(null);


    });

    test("Update User by id", async () => {

        var payload = {author_id, dateCreated, title, description, categories}  
      await messageDao.create(payload)
      
      var messages_before = await messageDao.readAll()
      var messages_len = messages_before.length

      title = "new_title"
      //var pay = {"email":"new_email"}
      payload = {author_id, dateCreated, title, description, categories}      
      await messageDao.update(messages_before[messages_len-1]._id, payload)
      var messages_after = await messageDao.readAll()

      title = "title"
      
      //expect(users_before[users_len-1].email).not.toBe("temp@gmail.com");
      expect(messages_after[messages_len-1].title).toBe("new_title");

    })
  
    test("delete User", async () => {
      const payload = {author_id, dateCreated, title, description, categories}  
      await messageDao.create(payload)
      await messageDao.create(payload)

      var messages = await messageDao.readAll()
      var messages_len = messages.length
      
      await messageDao.del(messages[messages_len-1]._id)
      var messages_after = await messageDao.readAll()
      
      var messages_len_after = messages_after.length
      
      expect(messages_len_after).toBe(messages_len -1)
    })


    
    