const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // console.log('***: '+prodId);
  Product.findById(prodId,product => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: 'products'
    });
  });
  // res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      // console.log(cart);
      for(product of products){
        const cartProductData = cart.products.find(
          prod => prod.id.trim() === product.id.trim()
        );
        if(cartProductData){
          cartProducts.push({productdata: product, qty: cartProductData.qty} );
        }
      }
      // console.log(cartProducts);
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req,res,next) => {
  const prodId = req.body.productId;
  // console.log('postCart: '+ prodId);
  Product.findById(prodId, product => {
    Cart.addProduct(prodId,product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
