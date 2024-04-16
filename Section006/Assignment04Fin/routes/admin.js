const path = require('path');
const bodyParser = require('body-parser');
const express = require("express");
const { title } = require('process');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

const users = []; 

router.get('/add-user', (req,res,next) => {    
    res.render(path.join(__dirname,'../','views','add-user'));   
});

router.post('/users', (req,res,next) => {    
    users.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.users = users; 