// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

//Require other tables/models
const Projects = require('./Projects');
const Technology = require('./Technologies');

// Initialize Project_Technologies model (a "join" table) by extending off Sequelize's Model class
class ProjectTechnologies extends Model {}

// Creates field names and rules for the Project_Technologies table
ProjectTechnologies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id'
      }
    },
    
    technology_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'technology',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project_technologies',
  }
);

module.exports = ProjectTechnologies;

