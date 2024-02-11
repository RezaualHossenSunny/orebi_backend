const mongoose = require('mongoose');
const { Schema } = mongoose;

const catgoryScema = new Schema({
    name:{
        type:String,
        required: true
    },
    discripstion: String,
    isActive:{ 
    type:Boolean,
    default:false
    },
    status:{
        type:String,
        default: 'wating',
        enum:['wating','reject','approve']
    },
    Subcatagory:{
        type: Schema.Types.ObjectId,
        ref:'Subcatgorylist'
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

module.exports = mongoose.model('catagorylist', catgoryScema)