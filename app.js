const mongoose= require('mongoose');
const request= require('request');
const cookieParser= require('cookie-parser');
const express = require('express');
const routes= require('./routes/routes');
const { requireAuthen, checkUser } = require('./middleware/middleware');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get('*', checkUser);
app.get('/', (request, response) => response.render('home'));
app.get('/options', requireAuthen, (request, response) => response.render('options'));
app.use(routes);
