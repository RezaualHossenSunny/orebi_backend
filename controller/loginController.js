const emailvalidation = require("../helpers/emailValidation");
const userList = require("../models/userScema");
const bcrypt = require('bcrypt');
async function loginControler(req,res){
const {email,password}=req.body
if(!email){
  return res.json({error: 'email is requred'})

}else if(!emailvalidation(email)){
    return res.json({error:'email is not valid'})
}else  if(!password){
    return res.json({error: 'password is requred'})
}else{
    const isEmailExit= await userList.find({email});
    bcrypt.compare(password, isEmailExit[0].password).then(function(result) {
       if(result){
        res.json({success:"login sucessfully done"})
       }else{
        res.json({error:"pasword is not match"})
       }
    });
}

}

module.exports=loginControler;