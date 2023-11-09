//imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//routes
const productsRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");
const mockRouter = require("./routes/mockProducts.router");
const userRouter = require("./routes/user.router");

const config = require("../config");
const { addLogger } = require("./utils/winstonConfig");

const app = express();
const port = config.port;

//middleware de winston
app.use(addLogger);

app.use(express.json());
app.use(bodyParser.json());

//ruta para probar winston
app.get("/", (req, res) => {
  req.logger.warning("Alert!");
  res.send({ message: "Mensaje de prueba" });
});

//escucha en el puerto
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//conexion a la DB
mongoose
  .connect(config.mongoURL)
  .then(() => {
    console.log("Conectado a la BD de Mongo Atlas");
  })
  .catch((error) => {
    console.error("Error en la conexión", error);
  });

//rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/api/mockingproducts", mockRouter);
app.use("/", userRouter);
