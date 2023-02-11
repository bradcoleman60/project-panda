const ProjectManager = require("../models/ProjectManager");

const projectManagerData = 
    [
        {
          username: "john_doe",
          password: "p@ssword123"
        },
        {
          username: "jane_doe",
          password: "SecurePassword1"
        },
        {
          username: "jim_smith",
          password: "qwertY1!"
        },
        {
          username: "sarah_johnson",
          password: "pa$$w0rd2"
        },
        {
          username: "mike_brown",
          password: "Sup3rS3cureP@ssword"
        }
      ]

const seedProjectManager = () => ProjectManager.bulkCreate(projectManagerData);

module.exports = seedProjectManager;
