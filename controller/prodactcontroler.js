const VariantScema = require('../models/VariantScema');
const producatSchema = require('../models/producatSchema');
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
function createproducatContorler(req,res){
     const {name,description,image,store}=req.body;
    //  console.log(name,description,price,image,store);


    const producat = new producatSchema({
      name,
      description,
      image,
      store
    })
    producat.save();
    res.json({sucsess:"prodacet create sucessfully done"})
}

async function createvarientController(req,res){
  const {name,description,qunatity,price,prodcat}=req.body;

  const variant =new VariantScema({
    name,
    description,
    qunatity,
    price,
    prodcat
  })
  variant.save();
  res.json({sucsess:"varient create sucessfully done"});

  await producatSchema.findByIdAndUpdate(
    {_id:variant._id},
    {$push:{variants:variant.prodcat}},
   {new:true}
  )
}

module.exports ={prodacatcontroller, createproducatContorler,createvarientController}