const User = require('../models/user');

// Use to install:
// npm install --save connect-mongodb-session
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[0].trim().split("=")[1];   
  // console.log('++++++: '+req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",  
    isAuthenticated: false
    // isAuthenticated: isLoggedIn  
  }); 
};

exports.postLogin = (req, res, next) => {   
  req.session.isLoggedIn = true;
  res.redirect('/');
  // User.findById("667ec96aa949020a0442e159")
  //   .then((user) => {
  //     req.session.isLoggedIn = true;
  //     req.session.user = user;
  //     res.redirect('/');
  //   })
  //   .catch((err) => console.log(err));  
};  

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};  
