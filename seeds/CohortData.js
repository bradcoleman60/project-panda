const Cohort = require("../models/Cohorts");

const cohortData = [
  {
   name: "Winter 2022"
    
  }
]

const seedCohorts = () => Cohort.bulkCreate(cohortData);

module.exports = seedCohorts;