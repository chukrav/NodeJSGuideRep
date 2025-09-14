const  Sequelize = require('sequelize');

const sequalise = new Sequelize({
    dialect: 'sqlite',
    storage: './dictionaryNZ.db'
});

  module.exports = sequalise;