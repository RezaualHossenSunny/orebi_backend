const VariantScema = require('../models/VariantScema');
const dicsountScema = require('../models/dicsountScema');
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
     const {name,description,store}=req.body;
    //  console.log(name,description,price,image,store);


    const producat = new producatSchema({
      name,
      description,
      store
    })
    producat.save();
    res.json({sucsess:"prodacet create sucessfully done"})
}

async function createvarientController(req,res){
  const {color,qunatity,price,prodcat,Storoge,Ram,Size,image}=req.body;
 console.log(req.file.filename);
  const variant =new VariantScema({
    color,
    qunatity,
    price,
    prodcat,
    Storoge,
    Ram,
    Size,
    image:`http://localhost:3000/uploads/${req.file.filename}`
  })
  variant.save();
 


await producatSchema.findOneAndUpdate(
  {_id:variant.prodcat},
  {$push:{varient:variant._id}},
  {new:true}
)
res.send({sucsess:"varient create sucessfully done"});
}

async function getallprodcatcontroller(req,res){
  const prodacet = await producatSchema.find({}).populate('store')
  res.send(prodacet)
}

module.exports ={prodacatcontroller, createproducatContorler,createvarientController,getallprodcatcontroller}