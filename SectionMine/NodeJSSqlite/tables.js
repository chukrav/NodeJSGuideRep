const  Sequelize = require('sequelize');

const sequalise = require('./database');
const { type } = require('os');

const Dictionary = sequalise.define('dictionary',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    word: Sequelize.TEXT,
    translation: Sequelize.TEXT,
    rating: Sequelize.INTEGER
});

module.exports = Dictionary;