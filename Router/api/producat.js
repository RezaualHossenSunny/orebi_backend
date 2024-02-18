const express=require("express");
const {prodacatcontroller,createproducatContorler, createvarientController} = require("../../controller/prodactcontroler");
const router =express.Router();

router.post('/crateprodact', prodacatcontroller ,createproducatContorler);
router.post('/crateVarient',createvarientController );

module.exports=router;