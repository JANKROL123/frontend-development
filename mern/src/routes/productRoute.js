const express = require("express");
const productRoute = express.Router();
const ProductModel = require("../model/product");
productRoute.use(express.json());

productRoute.get("/", async (req, res) => {
    const products = await ProductModel.find();
    return res.send(products);
});

productRoute.post("/", async (req, res) => {
    try {
        await ProductModel.create(req.body);
        return res.send("Inserted");
    } catch (err) {
        return res.status(400).send(err);
    }
});

productRoute.put("/:id", async (req, res) => {
    const updatedProduct = {
        nazwa: req.body.nazwa,
        cena: req.body.cena,
        opis: req.body.opis,
        ilosc: req.body.ilosc,
        miara: req.body.miara
    }
    try {
        await ProductModel.findByIdAndUpdate(req.params.id, updatedProduct, {runValidators: true});
        return res.send("Updated");
    } catch (err) {
        return res.send(err);
    }
});

productRoute.delete("/:id", async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        return res.send("Deleted");
    } catch (err) {
        return res.send(err);
    }
});

productRoute.get("/report", async (req, res) => {
    try {
        const result = await ProductModel.aggregate([{$set: {wartosc: {$multiply: ["$cena", "$ilosc"]}}}, {$project: {nazwa: 1, wartosc: 1}}])
        return res.send(result);
    } catch (err) {
        return res.send(err);
    }
});

module.exports = productRoute;