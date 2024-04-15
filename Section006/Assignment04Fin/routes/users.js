const path = require('path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req,res,next) => { 
    const users = adminData.users;   
    res.render('users',{docTitle: 'Users',users: users});
});

module.exports = router;