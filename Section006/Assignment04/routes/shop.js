const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    // res.send('<h1>Hello from express!</h1>');
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop');
});

module.exports = router;