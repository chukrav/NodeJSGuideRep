// const Sequelize = require('sequelize');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectURL = 'mongodb+srv://node-complete:nodeStudent@mflix.ryh22.mongodb.net/?retryWrites=true&w=majority&appName=mflix';
MongoClient.connect(connectURL)

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
