const dicsountScema = require("../models/dicsountScema")

function discountcontroler(req,res){
    const {cash,percent,falt,catagory,subCatagory,prodacet}=req.body

    const discount = new dicsountScema({
        cash,
        percent,
        falt,
        catagory,
        subCatagory,
        prodacet
    })
    discount.save();
    
    res.send({sucess:"Discount created Done"})
}
  async function  getDiscountcontroler (req,res){
    const data = await dicsountScema.find({}).populate(["prodacet","catagory","subCatagory"])
    res.send(data)
  
   } 
module.exports = {discountcontroler,getDiscountcontroler}