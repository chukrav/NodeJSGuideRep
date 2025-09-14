const path = require('path');
const express = require('express');

const rootDir = path.dirname(require.main.filename);

const router = express.Router();

const users = require('./my_root').users;

// router.get('/users',(req,res,next) => {    
//     res.send('<h1>In users page!</h1>');
// });
router.get('/',(req,res,next) => {    
    // res.send('<h1>In users page!</h1>');
    res.render('users',{users: users});
});

// /admin/add-product => POST
router.post("/", (req, res, next) => {
  // console.log(req.body);
  console.log(req.body);
  // res.redirect('/');
});

module.exports = router;