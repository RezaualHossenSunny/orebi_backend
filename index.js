const express = require('express')
const dbConnetion = require('./config/dbConection')
const app = express();
const userList=require('./models/userScema');
var cors = require('cors')
app.use(express.json());
app.use(cors())
require('dotenv').config();
const route  = require('./Router');

dbConnetion();
 app.use(route);
 const path = require('path')
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.listen(3000);