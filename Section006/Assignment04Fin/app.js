const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','pug');
app.set('views','views');  //default, optional 

const adminData = require('./routes/admin'); 
const usersRoutes = require('./routes/users');

app.use(adminData.routes);
app.use(usersRoutes);

app.use((req,res,next) => {	
	res.status(404).send('<h1><h1>Page not found!</h1></h1>');
});

app.listen(3000);