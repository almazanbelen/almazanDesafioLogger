//imports
const winston = require("winston");
const customLevelsOptions = require("./logger");
const config = require("../../config");

//logger a nivel desarrollo
const logger = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "./errors.log",
      level: "warning",
      format: winston.format.simple(),
    }),
  ],
});

//logger a nivel produccion
const loggerProd = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "./errorsProd.log",
      level: "warning",
      format: winston.format.simple(),
    }),
  ],
});

//middleware de winston
const addLogger = (req, res, next) => {
  if (config.enviroment === "PRODUCTION") {
    req.logger = loggerProd;
    req.logger.http(
      `${req.method} en ${req.url} - ${new Date().toLocaleTimeString}`
    );
  } else {
    req.logger = logger;
    req.logger.http(
      `${req.method} en ${req.url} - ${new Date().toLocaleTimeString}`
    );
  }
  next();
};

//exports
module.exports = {
  addLogger,
};
