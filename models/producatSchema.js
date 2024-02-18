const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProdactScema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    varient:[
        {
            type:Schema.Types.ObjectId,
            ref:"Variant"

        }

    ],
    store:{
        type:Schema.Types.ObjectId,
        ref:"Store"
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


module.exports = mongoose.model('prodecet', ProdactScema)