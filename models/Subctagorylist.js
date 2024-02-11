const mongoose = require('mongoose');
const { Schema } = mongoose;

const Subcatgory = new Schema({
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
        enum:['wating','reject','aprove']
    },

    catagory:{
   type: Schema.Types.ObjectId,
   ref :'catagorylist'
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

module.exports = mongoose.model('Subcatgorylist', Subcatgory)