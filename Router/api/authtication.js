const express=require("express");
const registrationControler = require("../../controller/registrationController");
const emailverificationController = require("../../controller/emailverificationControler");
const loginControler = require("../../controller/loginController");
const verificationcontroler = require("../../controller/VerificationControler");

const router =express.Router();

router.post('/restratison', registrationControler);
router.post('/verification',emailverificationController)
router.post('/login',loginControler)
router.get('/emailverification/:id',verificationcontroler )

module.exports=router
