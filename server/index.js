const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


//const userCont = require('./controllers/user-ctrl');
const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 8000

app.use(express.json())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({limit: '50mb'}))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
/*
app.get('/user', userCont.getAll );
app.get('/user/:id',userCont.get );
app.post('/user',userCont.postCreateOrUpdate); 
app.get('/deluser/:id',userCont.deleteOne); 
app.post('/updateuser',userCont.postCreateOrUpdate);
app.post('/dologin',userCont.login); 
app.get('/loggedUser',userCont.loggedUser);
app.get('/logout',userCont.logout);
*/

app.use('/api', router)



module.exports = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

