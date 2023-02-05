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

const dbURI = 'mongodb+srv://Barbara:JhqipbEQE1Wc6qDS@cluster0.cxdjlov.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get('*', checkUser);
app.get('/', (request, response) => response.render('home'));
app.get('/options', requireAuthen, (request, response) => response.render('options'));
app.use(routes);
