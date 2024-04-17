const path = require('path');

const express = require("express");

const router = express.Router();

const users = []; 

router.get('/add-product', (req,res,next) => {    
    res.render(path.join(__dirname,'../','views','add-user'),{docTitle: 'Add User'});
});

router.post('/users', (req,res,next) => {
    // console.log(req.body);
    users.push({ title: req.body.title }); 
    res.redirect('/');
});


// module.exports = router;
exports.routes = router;
exports.products = products; 