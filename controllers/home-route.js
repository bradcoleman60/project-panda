
const router = require("express").Router();

const sequelize = require("../config/connection");

const { Cohort, ProjectTechnologies, ProjectManager, Project, Technology, TeamMember, Technology1 } = require("../models");

//Get all Technologies for Create New Project Flow - Check Box Area

router.get("/", async (req, res) => {
    try {
        const techData = await Technology1.findAll()

        const techList = techData.map((data) => 
        data.get ({plain: true}))

        console.log("List of Tech", techList);

        res.render("tech-check-list", {techList});

    } catch (err){
        console.log(err);
        res.status(500).json(err)
    }

})

module.exports = router;

