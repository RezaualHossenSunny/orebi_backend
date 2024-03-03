const express=require("express");
const {discountcontroler,getDiscountcontroler} = require("../../controller/discontControler");

const router =express.Router();

router.post('/creatediscount', discountcontroler );
router.get('/getdiscount', getDiscountcontroler)

module.exports=router;