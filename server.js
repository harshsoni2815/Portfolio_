const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send', (req, res) => {
    
    const { name, email, phone, subject, message } = req.body;
    console.log( name, email, phone, subject, message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER, // replace with your email
            pass: process.env.PASSWORD   // replace with your email password or app-specific password
        }
    });


    const mailOptions = {
        from:  process.env.USERNAME ,
        to: process.env.TOUSER, // replace with your email
        subject: subject,
        text: `name:${name} \nemail:${email}\nnumber:(${phone} ):
       
        ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/');
        }
    });
});
app.get("*",(req,res)=>{

    res.redirect('/');
})
app.listen(port, () => {
    
});