let { fakerES } = require("@faker-js/faker");

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

module.exports = {
  generateProduct,
};
