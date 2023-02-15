const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TeamMember extends Model {}

TeamMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'id',
      },
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    github_username: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'TeamMember',
  }
);

module.exports = TeamMember;
