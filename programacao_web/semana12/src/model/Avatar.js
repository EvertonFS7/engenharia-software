const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Item = require('./Item');

class Avatar extends Model {}

Avatar.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Avatar'
});

Avatar.hasMany(Item, { as: 'items', foreignKey: 'avatarId' });

module.exports = Avatar;
