const TeamMember = require("../models/TeamMembers");

const teamMemberData = [
  {
    project_id: 1,
    full_name: "Travis Dupree",
    github_username: "Travis Dupree"
    },
    {
    project_id: 1,
    full_name: "Srinithi RaviChandran",
    github_username: "Srinithi RaviChandran"
    },
    {
    project_id: 1,
    full_name: "Brandon Haskell",
    github_username: "Brandon Haskell"
    },
    {
    project_id: 2,
    full_name: "Milton Ly",
    github_username: "Milton Ly"
    },
    {
    project_id: 2,
    full_name: "Daniel Baran",
    github_username: "Daniel Baran"
    },
    {
    project_id: 3,
    full_name: "Fayven Amelga",
    github_username: "Fayven Amelga"
    },
    {
    project_id: 3,
    full_name: "Ryan Moscoe",
    github_username: "Ryan Moscoe"
    },
    {
    project_id: 3,
    full_name: "Josh Matsumoto",
    github_username: "Josh Matsumoto"
    },
    {
    project_id: 3,
    full_name: "Henner Espinoza",
    github_username: "Henner Espinoza"
    },
    {
    project_id: 4,
    full_name: "Brian Zhoe",
    github_username: "Brian Zhoe"
    },
    {
    project_id: 4,
    full_name: "Jonothan Pohahau",
    github_username: "Jonothan Pohahau"
    },
    {
    project_id: 4,
    full_name: "Alex Horning",
    github_username: "Alex Horning"
    },
    {
    project_id: 4,
    full_name: "Brett Santor",
    github_username: "Brett Santor"
    },
    {
    project_id: 5,
    full_name: "Edwin Hernandez",
    github_username: "Edwin Hernandez"
    },
    {
    project_id: 5,
    full_name: "Ashrean",
    github_username: "Ashrean"
    },
    {
    project_id: 5,
    full_name: "Captain Solo",
    github_username: "Captain Solo"
    },
    {
    project_id: 6,
    full_name: "Troy Johnson",
    github_username: "Troy Johnson"
    },
    {
    project_id: 6,
    full_name: "Brad Coleman",
    github_username: "Brad Coleman"
    },
    {
    project_id: 6,
    full_name: "Daniele Bensan",
    github_username: "Daniele Bensan"
    },
    {
    project_id: 7,
    full_name: "Darren Watanabe",
    github_username: "Darren Watanabe"
    },
    {
    project_id: 7,
    full_name: "Jasmine Ulloa",
    github_username: "Jasmine Ulloa"
    },
    {
    project_id: 7,
    full_name: "Roksolana Odynak",
    github_username: "Roksolana Odynak"
    },
    {
      project_id: 7,
      full_name: "Emil Ronquillo",
      github_username: "Emil Ronquillo"
      },
      {
      project_id: 8,
      full_name: "Megan Ellman",
      github_username: "Megan Ellman"
      },
      {
      project_id: 8,
      full_name: "Michael Reyna",
      github_username: "Michael Reyna"
      },
      {
      project_id: 8,
      full_name: "Becka McNally",
      github_username: "Becka McNally"
      },
      {
      project_id: 8,
      full_name: "Peter Shaunessy",
      github_username: "Peter Shaunessy"
      },
      {
      project_id: 9,
      full_name: "McCoy Didericksen",
      github_username: "McCoy Didericksen"
      },
      {
      project_id: 9,
      full_name: "Gladys Isingzwe",
      github_username: "Gladys Isingzwe"
      },
      {
      project_id: 9,
      full_name: "Ian Senne",
      github_username: "Ian Senne"
      },




  {
    project_id: 10,
    full_name: "John Doe",
    github_username: "johndoe",
  },
  {
    project_id: 10,
    full_name: "Jane Doe",
    github_username: "janedoe",
  },
  {
    project_id: 10,
    full_name: "Jim Smith",
    github_username: "jimsmith",
  },
  {
    project_id: 10,
    full_name: "Sarah Johnson",
    github_username: "sarahjohnson",
  },
  {
    project_id: 10,
    full_name: "Mike Brown",
    github_username: "mikebrown",
  },
  
  {
    project_id: 11,
    full_name: "Emily Davis",
    github_username: "emilydavis",
  },
  {
    project_id: 12,
    full_name: "David Wilson",
    github_username: "davidwilson",
  },
  {
    project_id: 12,
    full_name: "William Thompson",
    github_username: "williamthompson",
  },
  {
    project_id: 12,
    full_name: "Robert Johnson",
    github_username: "robertjohnson",
  },
  {
    project_id: 13,
    full_name: "Ashley Wilson",
    github_username: "ashleywilson",
  },
  {
    project_id: 12,
    full_name: "Steven Lee",
    github_username: "stevenlee",
  },
  {
    project_id: 12,
    full_name: "Elizabeth Davis",
    github_username: "elizabethdavis",
  },
  {
    project_id: 12,
    full_name: "Michael Smith",
    github_username: "michaelsmith",
  },
  {
    project_id: 14,
    full_name: "William Wilson",
    github_username: "williamwilson",
  },
  {
    project_id: 14,
    full_name: "Emily Lee",
    github_username: "emilylee",
  },
  {
    project_id: 14,
    full_name: "David Johnson",
    github_username: "davidjohnson",
  },
  {
    project_id: 14,
    full_name: "Sarah Davis",
    github_username: "sarahdavis",
  },
  {
    project_id: 15,
    full_name: "Robert Wilson",
    github_username: "robertwilson",
  },
  {
    project_id: 15,
    full_name: "Ashley Lee",
    github_username: "ashleylee",
  },
];

const seedTeamMember = () => TeamMember.bulkCreate(teamMemberData);

module.exports = seedTeamMember;
