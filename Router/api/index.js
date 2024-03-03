const express=require("express");

const router=express.Router();
const authtication=require('./authtication')
const catagory=require('./catagory')
const mercentrouter=require('./mercent');
const prodactrouter=require('./producat');
const discountrouter = require('./discount');
// const authApirouter=process.env.BASE_AUTHROUTER

router.use('/authtication',authtication)

router.use('/catagory',catagory);
router.use('/merchant',mercentrouter);
router.use('/producat',prodactrouter);
router.use('/discount',discountrouter);


module.exports=router