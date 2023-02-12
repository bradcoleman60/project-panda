const TeamMember = require("../models/TeamMembers");

const teamMemberData = [
  {
    project_id: 1,
    full_name: "John Doe",
    github_username: "johndoe",
  },
  {
    project_id: 1,
    full_name: "Jane Doe",
    github_username: "janedoe",
  },
  {
    project_id: 1,
    full_name: "Jim Smith",
    github_username: "jimsmith",
  },
  {
    project_id: 1,
    full_name: "Sarah Johnson",
    github_username: "sarahjohnson",
  },
  {
    project_id: 1,
    full_name: "Mike Brown",
    github_username: "mikebrown",
  },
  
  {
    project_id: 2,
    full_name: "Emily Davis",
    github_username: "emilydavis",
  },
  {
    project_id: 3,
    full_name: "David Wilson",
    github_username: "davidwilson",
  },
  {
    project_id: 2,
    full_name: "William Thompson",
    github_username: "williamthompson",
  },
  {
    project_id: 2,
    full_name: "Robert Johnson",
    github_username: "robertjohnson",
  },
  {
    project_id: 2,
    full_name: "Ashley Wilson",
    github_username: "ashleywilson",
  },
  {
    project_id: 3,
    full_name: "Steven Lee",
    github_username: "stevenlee",
  },
  {
    project_id: 2,
    full_name: "Elizabeth Davis",
    github_username: "elizabethdavis",
  },
  {
    project_id: 4,
    full_name: "Michael Smith",
    github_username: "michaelsmith",
  },
  {
    project_id: 3,
    full_name: "William Wilson",
    github_username: "williamwilson",
  },
  {
    project_id: 4,
    full_name: "Emily Lee",
    github_username: "emilylee",
  },
  {
    project_id: 4,
    full_name: "David Johnson",
    github_username: "davidjohnson",
  },
  {
    project_id: 4,
    full_name: "Sarah Davis",
    github_username: "sarahdavis",
  },
  {
    project_id: 5,
    full_name: "Robert Wilson",
    github_username: "robertwilson",
  },
  {
    project_id: 5,
    full_name: "Ashley Lee",
    github_username: "ashleylee",
  },
];

const seedTeamMember = () => TeamMember.bulkCreate(teamMemberData);

module.exports = seedTeamMember;
