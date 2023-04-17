const express = require('express')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer');
const nodemailer = require('nodemailer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const path = require('path')

const db = require('./db')
const router = require('./routes/router')

const app = express()
const apiPort = 8000

app.use(express.json())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride('_method'));
app.use(cors({limit: '50mb'}))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', router)

function sendEmail({ recipient_email, OTP }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: recipient_email,
      subject: "Maryvale Alumnae Network Password Recovery",
      html: `<!DOCTYPE html>
      <html lang="en" >
      <head>
        <meta charset="UTF-8">
        <title>Maryvale Alumnae Network - OTP</title>
        
      </head>
      <body>
      <!-- partial:index.partial.html -->
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #a32738;text-decoration:none;font-weight:600">Maryvale Alumnae Network</a>
          </div>
          <p style="font-size:1.1em">Dear Alumna,</p>
          <p>Thank you for joining the Maryvale Alumnae Network!  Use the following One-time Password to complete your Password Recovery Procedure.  This One-time Password is valid for 5 minutes.</p>
          <h2 style="background: #a32738;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
          <p style="font-size:0.9em;">Kind Regards,<br />Maryvale Alumnae Network</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Maryvale Preparatory School</p>
            <p>11300 Falls Rd</p>
            <p>Lutherville, MD 21093</p>
          </div>
        </div>
      </div>
      <!-- partial -->
        
      </body>
      </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get("/", (req, res) => {
  console.log(process.env.MY_EMAIL);
});

app.post("/send_recovery_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

  /*
const upload = multer({ storage})
app.post('/upload', upload.single('myFile'), (req, res) => {
    res.json({file:req.file});
  });*/

module.exports = app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

