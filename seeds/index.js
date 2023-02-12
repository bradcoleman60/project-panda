//Actual Table 
const seedCohortData = require('./CohortData');
const seedProjectManagerData = require('./ProjectManagerData');
const seedProjectsData = require('./ProjectsData');
const seedTechnolgiesData = require('./TechnologiesData');
const seedTeamMembersData = require('./TeamMembersData');

//Join Tables
const seedProjectTechnologyData = require('./Project_TechnologiesData');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({force: false});
    console.log('\n------- DATABASE SYNCED -----\n');

       
    await seedCohortData();
    console.log('\n------- COHORT SEEDED-----\n');

    await seedProjectManagerData();
    console.log('\n------- PROJECT_MANAGER_DATA JOIN SEEDED -----\n');

    await seedProjectsData();
    console.log('\n------- PROJECT_DATA SEEDED -----\n');

    
    await seedTechnolgiesData();
    console.log('\n------- TECHNOLOGY_DATA SEEDED -----\n');

    await seedProjectTechnologyData();
    console.log('\n------- PROJECT_TECHNOLOGIES JOIN SEEDED-----\n');

    await seedTeamMembersData();
    console.log('\n------- TEAM_MEMBER SEEDED -----\n');


    //Seed Join Table

    process.exit(0)
;
};

seedAll();