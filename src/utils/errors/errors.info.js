generateProductErrorInfo = (product) => {
  return `Algun propiedad está incompleta o no es válida:
    *title : Se necesita un String y se recibio ${product.title}
    *description : Se necesita un String y se recibio ${product.description}
    *code : Se necesita un Number y se recibio ${product.code}
    *price : Se necesita un Number y se recibio ${product.price}
    *stock : Se necesita un Number y se recibio ${product.stock}
    *category : Se necesita un String y se recibio ${product.category}`;
};
module.exports = generateProductErrorInfo;
