'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Product extends Model {
    static associate(models) {
      // aqui no va la relacion de hasMany/belongsToMany
      //las relaciones van en los modelos (order y product)
    }
  }
  Order_Product.init({
    Order_Product_ProductId: DataTypes.INTEGER,
    Order_Product_OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Product',
  });
  return Order_Product;
};