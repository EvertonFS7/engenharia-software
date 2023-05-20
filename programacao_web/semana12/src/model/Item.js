const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Avatar = require('./Avatar');

class Item extends Model {}

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatarId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Item'
});

Item.belongsTo(Avatar, { as: 'avatar', foreignKey: 'avatarId' });

module.exports = Item;
