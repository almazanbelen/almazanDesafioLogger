const express = require("express");
const mongoose = require("mongoose");

//routes
const productsRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");
const mockRouter = require("./routes/mock.router")

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


app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/api/mockingproducts", mockRouter)
