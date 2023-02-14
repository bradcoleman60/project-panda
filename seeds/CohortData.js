const { Cohort } = require("../models");

const cohortData = [
  {
    id: 1,
    name: "Winter 2022",
  },
  {
    id: 2,
    name: "Fall 2022",
  },
  {
    id: 3,
    name: "Summer 2022",
  },
];

const seedCohorts = () => Cohort.bulkCreate(cohortData);

module.exports = seedCohorts;
