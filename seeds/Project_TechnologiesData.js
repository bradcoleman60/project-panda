const { ProjectTechnologies }  = require("../models");
// const  ProjectTechnologies   = require("../models");

const project_technologyData = [
  {
    project_id: 1,
    technology_id: 1,
    
  },
  {
    project_id: 1,
    technology_id: 2,
    
  },
  {
    project_id: 1,
    technology_id: 3,
    
  },
  {
    project_id: 1,
    technology_id: 4,
    
  },
  {
    project_id: 1,
    technology_id: 5,
    
  }
]

const seedProject_technologies = () => ProjectTechnologies.bulkCreate(project_technologyData);

module.exports = seedProject_technologies;


