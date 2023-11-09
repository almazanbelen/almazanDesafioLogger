//imports
const dotenv = require("dotenv");

//instancia del ambiente de produccion/desarrollo
const enviroment = "PRODUCTION";

//congig del .env
dotenv.config({
  path:
    enviroment === "DEVELOPMENT" ? "./.env.development" : "./.env.production",
});

//exports
module.exports = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  enviroment: process.env.NODE_ENV,
};
