const path = require('path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.use('/', (req,res,next) => {
    // res.send('<h1>Hello from users***!</h1>');
    res.sendFile(path.join(__dirname,'../','views','users.html'));
    // const users = adminData.users;
    // console.log(users);
    console.log('In users***');
    // res.render('shop',{prods: products, docTitle: 'Shop'});
});

module.exports = router;