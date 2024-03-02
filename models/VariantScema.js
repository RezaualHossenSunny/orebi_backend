const mongoose = require("mongoose");
const { schema } = require("./producatSchema");
const { Schema } = mongoose;

const VariantScema = new Schema({
  color: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true
},
  qunatity: {
    type:String,
    required:true
  },
  Storoge:{
    type:String,
  
  },
  Ram:{
    type:String,
   
  },
  prodcat: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  Size:String,
  creted: {
    type: Date,
    default: new Date(),
  },
  update: {
    type: Date,
  },
});

module.exports = mongoose.model("Variant", VariantScema);
