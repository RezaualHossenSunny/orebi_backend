var jwt = require('jsonwebtoken');
const userList = require('../models/userScema');
async  function verificationcontroler(req,res){
 const{id}=req.params
 console.log(id);
 const decodet= jwt.verify(id, process.env.TOKEN_SECRET);
 console.log(decodet);
 if(decodet){
    const updatUser= await userList.findOneAndUpdate(
        {email: decodet.email},
        {verified: true},
        {new:true}
       )
       res.redirect("http://localhost:5173/login")
 }
 else{
    res.json({error: "Error"})
 }
}

module.exports =verificationcontroler