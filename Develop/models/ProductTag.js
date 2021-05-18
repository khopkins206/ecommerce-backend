const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

const fields = {
  // define columns
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: `product`,
      key: `id`,
      unique: false
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: `tag`,
      key: `id`,
      unique: false
    }
  }
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product_tag',
};

ProductTag.init(fields, options)
module.exports = ProductTag;