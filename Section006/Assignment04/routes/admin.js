const path = require('path');

const express = require("express");

const router = express.Router();

const products = []; 

router.get('/add-product', (req,res,next) => {
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button> </input> </form>');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render(path.join(__dirname,'../','views','add-product'),{docTitle: 'Add Product'});
});

router.post('/product', (req,res,next) => {
    // console.log(req.body);
    products.push({ title: req.body.title }); 
    res.redirect('/');
});


// module.exports = router;
exports.routes = router;
exports.products = products; 