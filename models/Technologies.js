const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Technology extends Model {}

Technology.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    badge: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'technology',
}
);

module.exports= Technology;