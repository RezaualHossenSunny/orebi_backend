const mongoose = require("mongoose");
const { schema } = require("./producatSchema");
const { Schema } = mongoose;

const VariantScema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  qunatity: String,

  prodcat: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  creted: {
    type: Date,
    default: new Date(),
  },
  update: {
    type: Date,
  },
});

module.exports = mongoose.model("Variant", VariantScema);
