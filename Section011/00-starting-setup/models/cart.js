const Sequelyze = require('sequelize');

const sequelyze = require('../util/database');

const Cart = sequelyze.define("cart", {
  id: {
    type: Sequelyze.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  }
});

module.exports = Cart; 