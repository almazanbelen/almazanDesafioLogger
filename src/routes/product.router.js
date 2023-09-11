const { Router } = require("express");
const { productModel } = require("../models/product.model");


const router = Router();

router.get("/", async (req, res) => {
  try {
    let products = await productModel.find();
    res.send({ result: "success", payload: products });
  } catch (error) {}
});

router.post("/", async (req, res) => {
  let { title, description, code, price, stock, category } = req.body;
  if (!title || !description || !code || !price || !stock || !category) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  
  let result = await productModel.create({
    title,
    description,
    code,
    price,
    stock,
    category,
  });
  res.send({ result: "success", payload: result });
});

router.put("/:pid", async (req, res) => {
  let { pid } = req.params;
  let productToReplace = req.body;
  if (
    !productToReplace.title ||
    !productToReplace.description ||
    !productToReplace.code ||
    !productToReplace.price ||
    !productToReplace.stock ||
    !productToReplace.category
  ) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  let result = await productModel.updateOne({ _id: pid }, productToReplace);
  res.send({ result: "success", payload: result });
});

router.delete("/:pid", async (req, res) => {
  let { pid } = req.params;
  let result = await productModel.deleteOne({ _id: pid });
  res.send({ result: "success", payload: result });
});

module.exports = router;
