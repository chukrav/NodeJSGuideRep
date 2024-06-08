const Sequelyze = require('sequelize');

const sequelyze = require('../util/database');

const Order = sequelyze.define("order", {
  id: {
    type: Sequelyze.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelyze.INTEGER
});

module.exports = Order; 