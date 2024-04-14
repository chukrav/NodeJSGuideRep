const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
/*app.set('view engine','pug');
app.set('views','views');  //default, optional */

const adminData = require('./routes/admin'); 
const usersRoutes = require('./routes/users');

app.use(adminData.routes);
app.use(usersRoutes);
// app.use((req,res,next) => {
// 	console.log("In first middleware");
	// next();
// });

// app.use('/users', (req,res,next) => {
// 	console.log("In users middleware");
// 	res.send('<h1>Hello from users!</h1>');
// });

app.use((req,res,next) => {
	console.log("In root middleware");
	res.send('<h1>Hello from home!</h1>');
});

app.listen(3000);