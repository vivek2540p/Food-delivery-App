const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  catogery: {
    type: String,
  },
  image:{
    type:String
  },
  price:{
    type:Number,
  },
  description:{
    type:String,
  }
});

const product= mongoose.model('product', productSchema);
module.exports = product;