const mongoose = require('mongoose');
const { Schema } = mongoose;

const discountScema = new Schema({
   cash:{
    type:Number
   },
   percent:{
    type:Number
   },
   falt:{
    type:Boolean,
    default:false
   },
   catagory:{
    type:Schema.Types.ObjectId,
    ref:"catagorylist"
   },
   subCatagory:{
    type:Schema.Types.ObjectId,
    ref:"Subcatgorylist"
   },
   prodacet:{
    type:Schema.Types.ObjectId,
    ref:"prodecet"
   },
    creted:{
        type: Date,
        default: new Date()
    }
    ,
    update:{
        type:Date
    }

})


module.exports = mongoose.model('Discount', discountScema)