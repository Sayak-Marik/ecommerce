const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING
  },
  is_added: {
    type: DataTypes.BOOLEAN
  }
});

module.exports = Product;
