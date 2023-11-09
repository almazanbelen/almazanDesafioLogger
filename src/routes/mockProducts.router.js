//imports
const { Router } = require("express");
const { generateProduct } = require("../utils/faker.js");

//instancia para router
const router = Router();

//ruta para faker
router.get("/", async (req, res) => {
  let products = [];
  for (let i = 0; i < 100; i++) {
    products.push(generateProduct());
  }
  res.send({ status: "success", payload: products });
});

//exports
module.exports = router;
