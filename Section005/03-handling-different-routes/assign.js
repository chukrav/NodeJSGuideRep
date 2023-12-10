const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('In middleware just /!');   
    res.send('<p>In just / middleware!</p>'); 
});

app.use('/users', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<p>/In users middleware!</p>');
});

app.listen(3000);