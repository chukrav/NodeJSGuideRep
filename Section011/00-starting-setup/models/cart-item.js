const Sequelyze = require('sequelize');

const sequelyze = require('../util/database');

const CartItem = sequelyze.define("cartItem", {
  id: {
    type: Sequelyze.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelyze.INTEGER
});

module.exports = CartItem; 