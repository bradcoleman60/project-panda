const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}


Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cohort_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cohort',
          key: 'id',
        },
    },
    project_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project_manager',
        key: 'id',
      },
  },
  
    github_repo_link: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project'
  }
);

module.exports = Project;
