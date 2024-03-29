var jwt = require('jsonwebtoken');
const userList = require('../models/userScema');

async function emailverificationController(req,res){
  const {authorization}=req.headers;
  console.log( authorization);


 const decodet= jwt.verify(authorization, process.env.TOKEN_SECRET);
 console.log(decodet);

 const updatUser= await userList.findOneAndUpdate(
  {email: decodet.email},
  {verified: true},
  {new:true}
 )
 res.send(updatUser)

}

module.exports=emailverificationController;