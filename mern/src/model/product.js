const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    nazwa: {type: String, required: true, unique: true},
    cena: {type: Number, required: true},
    opis: {type: String, required: true},
    ilosc: {type: Number, required: true},
    miara: {type: String, required: true},
});

const ProductModel = model("Product", productSchema, "products");
module.exports = ProductModel;