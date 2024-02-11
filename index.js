const express = require('express')
const dbConnetion = require('./config/dbConection')
const app = express();
const userList=require('./models/userScema');
app.use(express.json());
require('dotenv').config();
const route  = require('./Router');

dbConnetion();
 app.use(route);

app.listen(3000);