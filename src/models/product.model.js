//imports
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

//coleccion
const productsCollection = "products";

//schema
const productsSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  code: { type: Number, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true, max: 100, index: true },
});

productsSchema.plugin(mongoosePaginate);
const productModel = mongoose.model(productsCollection, productsSchema);

//exports
module.exports = { productModel };
