const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}


const fields = {
  // define columns
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
};

Category.init(fields, options)

module.exports = Category;