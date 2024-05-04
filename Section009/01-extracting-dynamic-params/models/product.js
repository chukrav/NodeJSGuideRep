const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {    
    // console.log('In product save: get this.id '+this.id);
    getProductsFromFile(products => {
      if (this.id) {
        // console.log('product[0]: '+products[0].id);
        const existingProductIndex = products.findIndex(
          prod => prod.id.trim() === this.id.trim()           
        );
        console.log('existingProductIndex: ' + typeof(existingProductIndex));
        const updatedProducts = [...products];
        // console.log('In product save!' + existingProductIndex);
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }      
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id.trim() === id.trim());
      const updatedProducts = products.filter(p => p.id !== id);      
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        // console.log(err);
        Cart.deleteProdyct(id, product.price);
      });   
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb){    
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);      
      return cb(product);    
    });
  }
};
