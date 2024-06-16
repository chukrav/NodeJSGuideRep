// const Sequelize = require('sequelize');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  const connectURL = 'mongodb+srv://node-complete:<password>@mflix.ryh22.mongodb.net/shop?retryWrites=true&w=majority&appName=mflix';
  MongoClient.connect(connectURL)
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
      // callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });    
  
  // const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  //   dialect: 'mysql',
  //   host: 'localhost'
  // });
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No db was found!';
};

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
