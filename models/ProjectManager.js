const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ProjectManager extends Model {}

ProjectManager.init(
    {
        id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            primaryKey: true,
            autoIncrement: true, 

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project_manager',

    }
);

module.exports = ProjectManager;