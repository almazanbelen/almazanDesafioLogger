//imports
let { fakerES } = require("@faker-js/faker");

//funcion para generar productos
generateProduct = () => {
  return {
    title: fakerES.commerce.product(),
    description: fakerES.commerce.productDescription(),
    code: fakerES.commerce.isbn(4),
    price: fakerES.commerce.price(),
    stock: fakerES.number.int(100),
    category: fakerES.commerce.department(),
  };
};

//funcion para generar usuarios y luego testearlos con artillery
generateUser = () => {
  return {
    first_name: fakerES.person.firstName(),
    last_name: fakerES.person.lastName(),
    email: fakerES.internet.email(),
    password: fakerES.number.int(100),
  };
};

//exports
module.exports = {
  generateProduct,
  generateUser,
};
