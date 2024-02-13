const express=require("express");
const {prodacatcontroller,createproducat} = require("../../controller/prodactcontroler");
const router =express.Router();

router.post('/crateprodact', prodacatcontroller ,createproducat)

module.exports=router;