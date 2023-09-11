const express = require("express");
const mongoose = require("mongoose");

//routes
const productsRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");
const { cartModel } = require("./models/cart.model");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://almazanbelen:belsds22@cluster0.dfo2ui5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado a la BD de Mongo Atlas");
  })
  .catch((error) => {
    console.error("Error en la conexión", error);
  });

// const enviroment = async () => {
//   await mongoose.connect("mongodb+srv://almazanbelen:belsds22@cluster0.dfo2ui5.mongodb.net/?retryWrites=true&w=majority")
//   // let cart = await cartModel.findById({_id: "64fb398d12a8525d06bd64f4"})
//   // cart.products.push({ product: "64fa49bbfe40bdbf56426db6"})
//   // let result = await cartModel.updateOne({_id: "64fb398d12a8525d06bd64f4"}, cart)
// }

// enviroment()

app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
