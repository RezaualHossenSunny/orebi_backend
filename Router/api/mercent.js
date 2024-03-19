const express=require("express");
const {becomemercent,getallstoreControler} = require("../../controller/mercentcontroler");

const router =express.Router();

router.post('/becomemercent',becomemercent);
router.get ('/allstore',getallstoreControler)

module.exports=router;