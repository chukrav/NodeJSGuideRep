const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','pug');
app.set('views','views');  //default, optional

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

const adminData = require('./routes/admin'); 
const shopRoutes = require('./routes/users');

app.use(shopRoutes);
app.use(adminData.routes);