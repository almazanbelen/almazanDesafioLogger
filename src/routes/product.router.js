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
  let { nombre, apellido, categoria, precio, stock, imagen } = req.body;
  if (!nombre || !apellido || !categoria || !precio || !stock || !imagen) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  let result = await productModel.create({
    nombre,
    apellido,
    categoria,
    precio,
    stock,
    imagen,
  });
  res.send({ result: "success", payload: result });
});

router.put("/:pid", async (req, res) => {
  let { pid } = req.params;
  let productToReplace = req.body;
  if (
    !productToReplace.nombre ||
    !productToReplace.apellido ||
    !productToReplace.categoria ||
    !productToReplace.precio ||
    !productToReplace.stock ||
    !productToReplace.imagen
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
