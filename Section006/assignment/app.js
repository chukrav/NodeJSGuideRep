const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

const rootRoutes = require('./routes/my_root');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));


app.use(rootRoutes.router);
app.use('/users',usersRoutes);

// app.use((req,res,next) => {
//     res.send('<h1>Suppose not to use!</h1>');
// });

app.listen(3000);