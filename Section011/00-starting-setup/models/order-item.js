const Sequelyze = require('sequelize');

const sequelyze = require('../util/database');

const OrderItem = sequelyze.define("orderItem", {
  id: {
    type: Sequelyze.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  }
//   no quantity 
});

module.exports = OrderItem; 