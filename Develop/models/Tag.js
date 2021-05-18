const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

const fields = {
  // define columns
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  tag_name: {
    type: DataTypes.STRING
  }
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'tag',
};


Tag.init(fields, options)

module.exports = Tag;