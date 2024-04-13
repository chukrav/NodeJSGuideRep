const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','pug');
app.set('views','views');  //default, optional