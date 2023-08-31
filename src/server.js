const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.router");
const productsRouter = require("./routes/product.router");
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

app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
