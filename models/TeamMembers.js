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
      // validate: {
      //   isAlpha: true, //allows only letters
      //   notNull: {
      //       msg: 'Please enter a name' //error message if name field is null
      //   },
      // }
    },
    github_username: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate:{
      //   notNull: {
      //       msg: 'Please enter a username' //error message if username field is null
      //   }
      // }
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
