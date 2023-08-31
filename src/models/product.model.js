const mongoose = require("mongoose");

const productsCollection = "productos";

const productsSchema = new mongoose.Schema({
    nombre:{type: String, required: true, max: 100},
    apellido:{type: String, required: true, max: 100},
    categoria:{type: String, required: true, max: 50},
    precio:{type: Number, required: true},
    stock:{type: Number, required: true},
    imagen:{type: String, required: true, max: 100}
})

const productModel = mongoose.model(productsCollection, productsSchema)

module.exports = {productModel}