const userScema = require("../models/userScema")

async function Userdetailscontroler(req,res){
const data =await userScema.find({})

res.json (data)

}

module.exports=Userdetailscontroler