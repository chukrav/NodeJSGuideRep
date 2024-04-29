const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //Fetch previous
    let cart = { products: [], totalPrice: 0 };
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        cart = JSON.parse(fileContent);        
      }
      const existingProdIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProd = cart.products[existingProdIndex];
      let updatedProd;
      if (existingProd) {
        // console.log(existingProd);
        updatedProd = { ...existingProd };
        updatedProd.qty = updatedProd.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProdIndex] = updatedProd;
      } else {
        updatedProd = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProd];
      }
      let tp = parseFloat(cart.totalPrice) + parseFloat(productPrice);
      cart.totalPrice = tp.toFixed(2);
    //   cart.totalPrice = cart.totalPrice + parseFloat(productPrice);
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });    
  }
};
