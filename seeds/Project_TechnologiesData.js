const { ProjectTechnologies }  = require("../models");
// const  ProjectTechnologies   = require("../models");

const project_technologyData = [

  {
    project_id: 1,
    technology_id: 51
    },
    {
    project_id: 1,
    technology_id: 22
    },
    {
    project_id: 1,
    technology_id: 6
    },
    {
    project_id: 1,
    technology_id: 7
    },
    {
    project_id: 2,
    technology_id: 51
    },
    {
    project_id: 2,
    technology_id: 22
    },
    {
    project_id: 2,
    technology_id: 6
    },
    {
    project_id: 2,
    technology_id: 7
    },
    {
    project_id: 3,
    technology_id: 51
    },
    {
    project_id: 3,
    technology_id: 22
    },
    {
    project_id: 3,
    technology_id: 3
    },
    {
    project_id: 3,
    technology_id: 7
    },
    {
    project_id: 4,
    technology_id: 51
    },
    {
    project_id: 4,
    technology_id: 22
    },
    {
    project_id: 4,
    technology_id: 3
    },
    {
    project_id: 4,
    technology_id: 7
    },
    {
    project_id: 5,
    technology_id: 51
    },
    {
    project_id: 5,
    technology_id: 22
    },
    {
    project_id: 5,
    technology_id: 3
    },
    {
    project_id: 5,
    technology_id: 7
    },
    {
    project_id: 6,
    technology_id: 51
    },
    {
    project_id: 6,
    technology_id: 22
    },
    {
    project_id: 6,
    technology_id: 3
    },
    {
    project_id: 6,
    technology_id: 7
    },
    {
    project_id: 7,
    technology_id: 51
    },
    {
    project_id: 7,
    technology_id: 22
    },
    {
    project_id: 7,
    technology_id: 3
    },
    {
    project_id: 7,
    technology_id: 7
    },
    {
    project_id: 8,
    technology_id: 51
    },
    {
    project_id: 8,
    technology_id: 22
    },
    {
    project_id: 8,
    technology_id: 3
    },
    {
    project_id: 8,
    technology_id: 7
    },
    {
    project_id: 9,
    technology_id: 51
    },
    {
    project_id: 9,
    technology_id: 22
    },
    {
    project_id: 9,
    technology_id: 3
    },
    {
    project_id: 9,
    technology_id: 7
    },



  {
    project_id: 10,
    technology_id: 1,
    
  },
  {
    project_id: 10,
    technology_id: 2,
    
  },
  {
    project_id: 10,
    technology_id: 3,
    
  },
  {
    project_id: 10,
    technology_id: 4,
    
  },
  {
    project_id: 10,
    technology_id: 5,
    
  }
]

const seedProject_technologies = () => ProjectTechnologies.bulkCreate(project_technologyData);

module.exports = seedProject_technologies;


