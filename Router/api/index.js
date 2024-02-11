const express=require("express");

const router=express.Router();
const authtication=require('./authtication')
const catagory=require('./catagory')

// const authApirouter=process.env.BASE_AUTHROUTER

router.use('/authtication',authtication)

router.use('/catagory',catagory)



module.exports=router