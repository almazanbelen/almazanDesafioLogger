const { Router } = require("express");
const { productModel } = require("../models/product.model");
const CustomError = require("../utils/errors/customErrors");
const EErrors = require("../utils/errors/enums");
const generateProductErrorInfo = require("../utils/errors/errors.info");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const sort = parseInt(req.query.sort) || "asc";
    const filter =
      req.query.category === "all"
        ? {}
        : req.query.category
        ? { category: req.query.category }
        : {};

    const options = {
      limit: limit,
      page: page,
      sort: { price: sort },
    };

    let products = await productModel.paginate(filter, options);

    res.send({ result: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;
  if (!pid) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  const result = await productModel.find({ _id: pid });
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { title, description, code, price, stock, category } = req.body;

  if (!title || !description || !code || !price || !stock || !category) {
    CustomError.createError({
      name: "Ha ocurrido un error",
      cause: generateProductErrorInfo({
        title,
        description,
        code,
        price,
        stock,
        category,
      }),
      message: "Error al tratar de crear un producto",
      code: EErrors.INVALID_TYPES_ERROR,
    });
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
