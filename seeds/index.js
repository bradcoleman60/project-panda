// const seedProjectTechnologyData = require('./Project_TechnologiesData');
// const seedProjectManagerData = require('./ProjectManagerData');
// const seedProjectsData = require('./ProjectsData');
// const seedTeamMembersData = require('./TeamMembersData');
const seedTechnolgiesData = require('./TechnologiesData');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({force: true});
    console.log('\n------- DATABASE SYNCED -----\n');
    
    // await seedProjectTechnologyData();
    console.log('\n------- PROJECT_TECHNOLIGIES SEEDED-----\n');
    
    // await seedProjectManagerData();
    console.log('\n------- PROJECT_MANAGER_DATA SEEDED -----\n');
    
    // await seedProjectsData();
    console.log('\n------- PROJECT_DATA SEEDED -----\n');

    // await seedTeamMembersData();
    console.log('\n------- TEAM_MEMBER SEEDED -----\n');

    await seedTechnolgiesData();
    console.log('\n------- TECHNOLOGY_DATA SEEDED -----\n');

    process.exit(0)
;
};

seedAll();