const userlist =require ('../models/userScema');
 async function prodacatcontroller(req,res,next){
 const userId=req.headers.authorization.split("@")[1];
 const password=req.headers.authorization.split("@")[2];
 if(!req.headers.authorization){
   return res.json({err:"unautrozie"})
 }else{
  const user = await userlist.find({_id:userId});
  if(user.length>0){

    if(password == "12345" && user[0].role =="mercent"){

        next()
    }else{
        res.json({err :"you are nor abibale"})
    }
   
  }else{
    res.json({err:"you not abile"})
  }
 }

}
function createproducat(req,res){
    res.json({sucsess:"created prodacet"})
}

module.exports ={prodacatcontroller, createproducat}