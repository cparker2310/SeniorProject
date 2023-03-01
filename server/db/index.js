const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp';

mongoose.connect(dbURI, { useNewUrlParser: true})
  //.then((result) => app.listen(3000))
  .catch(e => {
    console.error('Connection error', e.message)
})

  const db = mongoose.connection

  module.exports = db