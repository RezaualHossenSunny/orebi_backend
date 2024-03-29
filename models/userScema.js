const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema= new  Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
     adress1:{
        type:String
     },
     city:{
        type:String,
     },
     postcode:{
        type:String,
     },
     divison:{
        type:String,
     },
     districet:{
        type:String,
     },
     password:{
        type:String,
        required:true
     },
   verified:{
      type:Boolean,
      default:false
   },
 role:{
   type:String,
   default: "member",
   enum: ["admin","member","mercent"]
 },
 token: String
       
})


module.exports=mongoose.model("userList", userSchema)