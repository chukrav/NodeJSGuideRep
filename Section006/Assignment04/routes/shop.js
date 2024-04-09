const path = require('path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req,res,next) => {
    // res.send('<h1>Hello from express!</h1>');
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop'});
});

module.exports = router;