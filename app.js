const express = require ('express');
const session = require ('express-session');
const cookie = require ('cookie-parser');
const path = require ('path');
const ejs= require ('ejs');
const multer = require('multer');
const path = require ('path');
const async = require ('async');
const nodmailer = require ('nodemailer');
const crypto = require ('crypto');
const expressValidator = require ('express-validator');
const  sweetalert = require('sweetalert2');

var app = express();




const bodyParser = require ('body-parser');

const  login = require ('./controllers/login');
const  home = require ('./controllers/home');
const  signup = require ('./controllers/signup');
const add_doc = require('./controllers/add_doctor');
const  doc_controller = require ('./controllers/doc_controller');
const db = require ('./models/db_controller');
const reset = require('./controllers/reset_controller');
const set = require('./controllers/set_controller');
const employee = require ('./controllers/employee.js');
const logout = require ('./controllers/logout');
const verify = require ('./controllers/verify');
const store = require ('./controllers/store');
const landing = require ('./controllers/landing');
const complain = require ('./controllers/complain');
const inbox = require ('./controllers/inbox');
const appointment = require ('./controllers/appointment');

const receipt = require ('./controllers/receipt');
const chat = require ('./controllers/chat');

const app = express();


app.set('view engine ', 'ejs');




app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookie());
//app.use(expressValidator());


const server =app.listen(3000 , function(){

    console.log('server started');
});

app.use('/login' ,login);
app.use('/home' , home);
app.use('/signup' , signup);
app.use('/doctors', doc_controller);
app.use('/resetpassword' ,reset);
app.use('/setpassword',set);
app.use('/employee',employee);
app.use ('/logout',logout);
app.use ('/verify', verify);
app.use ('/store',store);
app.use ('/',landing);
app.use ('/complain',complain);
app.use ('/inbox',inbox);
app.use ('/appointment',appointment);
app.use('/receipt',receipt);

// app.use('/doctors/add_doctor',add_doc);