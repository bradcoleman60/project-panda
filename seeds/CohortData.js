const { Cohort } = require("../models");

const cohortData = [
  {
    id: 1,
    name: "Winter 2022",
  },
];

const seedCohorts = () => Cohort.bulkCreate(cohortData);

module.exports = seedCohorts;
