const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://iambarbara22:3lhG5BXbcIDiBx2o@maryvale.3yerlmv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true})
  //.then((result) => app.listen(3000))
  .catch(e => {
    console.error('Connection error', e.message)
})

  const db = mongoose.connection

  module.exports = db