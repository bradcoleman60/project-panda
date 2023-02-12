const router = require("express").Router();

// const sequelize = require("../config/connection");

const {Cohort, ProjectTechnologies, ProjectManager, Project, Technology, TeamMember } = require("../models");

//Get all Technologies for Create New Project Flow - Check Box Area

router.get("/tech", async (req, res) => {
  try {
    const techData = await Technology.findAll();

    const techList = techData.map((data) => data.get({ plain: true }));

    console.log("List of Tech", techList);

    res.render("tech-check-list", { techList });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Render project list by id
router.get("/projects/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: ProjectManager,
          attributes: ["username"],
        },
      ],
    });

    const projects = projectData.get({ plain: true });

    res.render("projectList", {
      ...projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;