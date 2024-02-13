 const Store = require ('../models/mercentScema');
 const userList = require ('../models/userScema');
 async function becomemercent(req,res){
 const{storename,officialEmail,officaltelephone,adress,owner,products}=req.body;
//  console.log(storename,officaltelephone,officialEmail,adress,owner,products);
  

 const store = new Store({
    storename,
    officaltelephone,
    officialEmail,
    adress,
    owner,
    products
 })

store.save();
// res.json({sucess:"you are become a mercent :congress you"})

 await userList.findOneAndUpdate(
    {_id:owner},
    {role:"mercent"},
    {new:true}
) 

res.json(store);

}

module.exports=becomemercent;