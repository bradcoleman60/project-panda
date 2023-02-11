const TeamMember = require("../models/TeamMembers");

const teamMemberData = [
    { full_name: "John Doe", github_username: "johndoe"  }, 
    { full_name: "Jane Doe", github_username: "janedoe" }, 
    { full_name: "Jim Smith", github_username: "jimsmith" }, 
    { full_name: "Sarah Johnson", github_username: "sarahjohnson" },
     { full_name: "Mike Brown", github_username: "mikebrown" }]


const seedTeamMember = () => TeamMember.bulkCreate(teamMemberData);

module.exports = seedTeamMember;
