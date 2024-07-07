const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

// router.get('/login',(req,res,next) => {
//     res.render('/login', authController.getLogin);
// });
router.get('/login',authController.getLogin);

router.post('/login',authController.postLogin);

module.exports = router;