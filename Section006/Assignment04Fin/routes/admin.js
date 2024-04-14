const path = require('path');
const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

const users = []; 

router.get('/add-user', (req,res,next) => {
    // console.log('In admin middleware'); 
    // res.send('<h1>Hello from admin!</h1>');
    res.send('<form action="/users" method="POST"><input type="text" name="title"><button type="submit">Add user</button> </input> </form>');
    // res.sendFile(path.join(__dirname,'../','views','add-user.html'));
    // res.redirect('/');
});

// router.get('/add-user', (req,res,next) => {
//     console.log('In admin middleware');
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button> </input> </form>');
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    //res.render(path.join(__dirname,'../','views','add-product'),{docTitle: 'Add Product'});
    //next();
// });

router.post('/users', (req,res,next) => {
    console.log(req.body);
    // products.push({ title: req.body.title }); 
    res.redirect('/');
});


// module.exports = router;
exports.routes = router;
exports.users = users; 