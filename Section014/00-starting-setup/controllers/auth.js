// Use to install:
// npm install --save connect-mongodb-session
exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[0].trim().split("=")[1];   
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",  
    isAuthenticated: false
    // isAuthenticated: isLoggedIn  
  });
};

exports.postLogin = (req, res, next) => {
  // req.isLoggedIn = true;
  // res.setHeader('Set-Cookie', 'loggedIn=true');
  req.session.isLoggedIn = true;
  res.redirect('/');
};
