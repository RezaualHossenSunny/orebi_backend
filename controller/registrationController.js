const emailvalidation = require('../helpers/emailValidation');
const emailVerificationTempalte = require('../helpers/emailVerificationTemplate');
const senEmail = require('../helpers/sendEmail');
const userList=require('../models/userScema');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
 async function registrationControler(req,res){
    const{firstname,lastname,email,telephone,adress1,city,postcode,divison,districet,password}= req.body
     if(!firstname || !lastname){
      return  res.send({error: 'fristname & lastname is required'})
     }
     if(!email){
        return res.send({error:'email is reqiured'})
     }
 if(!emailvalidation(email)){
   return res.json({error:'email is not valid'})
 }

     if(!telephone){
        return res.send({error: 'telephone number is reqiured'})
     }

  const emailexsting= await userList.findOne({email});
  if(emailexsting){
    return  res.send({error: 'email is alredy in used'})
  }

    bcrypt.hash(password, 10, function(err, hash) {
        const user=new userList({
            firstname,
            lastname,
            email,
            telephone,
            adress1,
            city,
            postcode,
            divison,
            districet,
            password:hash
        })
   
        user.save();
        var token = jwt.sign({email}, process.env.TOKEN_SECRET);
        senEmail(email ,'EMAIL VERIFICATION',emailVerificationTempalte(token));
        res.send(user)
    });
    
  
    
}
module.exports=registrationControler;