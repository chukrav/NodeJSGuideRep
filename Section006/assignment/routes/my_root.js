const path = require('path');
const express = require('express');

const rootDir = path.dirname(require.main.filename);

const router = express.Router();

const Users = [];

router.get('/',(req,res,next) => {
    // res.send('<h1>In main page!</h1>');
    res.render('rootPage');
});

router.post('/',(req,res,next) => {
    // res.send('<h1>In add user!</h1>');
    // res.render('rootPage');
    // console.log(req.body.name);
    Users.push(req.body.name);
    console.log(Users);
    res.redirect('/users');
});


exports.router = router;
exports.users = Users;
