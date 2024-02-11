const express=require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

function dbConnetion(){
    mongoose.connect(process.env.MONGODDURI)
    .then(() => console.log('database-Connected'));
}

module.exports=dbConnetion;