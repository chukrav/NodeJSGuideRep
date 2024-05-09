const fs = require('fs');   
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

  module.exports = class Cart {
    static addProduct(id, productPrice) {
      // Fetch the previous
      fs.readFile(p, (err, fileContent) => {
        let cart = { products: [], totalPrice: 0 };
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        // Analyze the cart
        const existingProductIndex = cart.products.findIndex(
          (prod) => prod.id === id
        );
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // Add new product/Increase quantity
        if (existingProduct) {
          updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice =
          "" +
          (parseFloat(cart.totalPrice) + parseFloat(productPrice)).toFixed(2);
        fs.writeFile(p, JSON.stringify(cart), (err) => {
          console.log(err);
        });
      });
    }

    static deleteProdyct(id, productPrice) {
      fs.readFile(p, (err, fileContent) => {
        if (err) {
          return;
        }
        const updatedCart = { ...JSON.parse(fileContent) };
        const product = updatedCart.products.find(
          (prod) => prod.id.trim() === id.trim()
        );
        const productQty = product.qty;
        updatedCart.products = updatedCart.products.filter(
          (prod) => prod.id.trim() !== id
        );
        updatedCart.totalPrice =
          "" +
          (
            parseFloat(updatedCart.totalPrice) -
            productPrice * productQty
          ).toFixed(2);
        fs.writeFile(p, JSON.stringify(cart), (err) => {
          console.log(err);
        });
      });
    }

    static getCart(cb){
        fs.readFile(p,(err,fileContent) => {
            const cart = JSON.parse(fileContent);
            if (err) {
                cb(null);
            } else {
                cb(cart);
            }            
        });
    }

  };