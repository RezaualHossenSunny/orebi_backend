const express=require("express");
const becomemercent = require("../../controller/mercentcontroler");

const router =express.Router();

router.post('/becomemercent',becomemercent)

module.exports=router;