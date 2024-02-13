const mongoose = require('mongoose');
const { Schema } = mongoose;


const StoreScema= new Schema({
  storename:{
    type:String,
    required:true
  },
  officialEmail:{
    type:String,
    required:true
  },
  officaltelephone:{
    type:String,
    required:true
  },
  adress:{
    type:String,
    required:true
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"userList"
  },
  products:[
    {
        type:Schema.Types.ObjectId,
        ref:"prodact"

    }
  ]
})


module.exports = mongoose.model('Store', StoreScema)