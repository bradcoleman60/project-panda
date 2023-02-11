//Importing models
const TeamMember = require("./TeamMembers");
const Project = require("./Projects")




//Associations between team members and projects
Project.hasMany(TeamMember, { foreignKey: 'project_id]' });
TeamMember.belongsTo(Project, { foreignKey: 'project_id' });
