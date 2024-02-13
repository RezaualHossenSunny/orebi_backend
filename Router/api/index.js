const express=require("express");

const router=express.Router();
const authtication=require('./authtication')
const catagory=require('./catagory')
const mercentrouter=require('./mercent');
const prodactrouter=require('./producat');

// const authApirouter=process.env.BASE_AUTHROUTER

router.use('/authtication',authtication)

router.use('/catagory',catagory)
router.use('/merchant',mercentrouter)
router.use('/producat',prodactrouter)



module.exports=router