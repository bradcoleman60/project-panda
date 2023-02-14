//Importing models
const TeamMember = require("./TeamMembers");
const Project = require("./Projects");
const Technology = require("./Technologies");

const ProjectManager = require("./ProjectManager");
const Cohort = require("./Cohorts");
const ProjectTechnologies = require("./Project_Technologies");




//Associations between team members and projects
// Team Members have one project and Projects have many team members 
Project.hasMany(TeamMember, { foreignKey: 'project_id' });

TeamMember.belongsTo(Project, { foreignKey: 'project_id' });

// Project has many Team Members and Team Members belong to Projects

Project.hasMany(TeamMember, {
    foreignKey: 'project_id'
});

TeamMember.belongsTo(Project,{
    foreignKey: 'project_id'
})

// Projects have many technologies THROUGH project_technologies

Project.belongsToMany(Technology,{
    through: 'project_technologies'
}
      );

//technologies have many projects THROUGH project_technologies 

Technology.belongsToMany(Project, {
    through: 'project_technologies'
})


// Project Manager has many Project and projects belong to Project Manager

ProjectManager.hasMany(Project, {
    foreignKey: 'project_manager_id'
});

Project.belongsTo(ProjectManager, {
    foreignKey: 'project_manager_id'
})




// Project has one Cohort and Cohort belongs to many Projects

Cohort.hasMany(Project, {
    foreignKey: 'cohort_id'
});

Project.belongsTo(Cohort, {
    foreignKey: 'cohort_id'
})

module.exports = {
    Project,
    Technology,
    ProjectManager,
    Cohort,
    ProjectTechnologies,
    TeamMember
  };

 