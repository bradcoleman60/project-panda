const router = require("express").Router();
const { Project, TeamMember ,Technology, ProjectTechnologies} = require("../../models");
const { describe } = require("../../models/TeamMembers");
const withAuth = require("../../utils/auth");

// router.get("/", async (req, res) => {
//   try {
//     const projectData = await Project.findAll();

//     const projectList = projectData.map((project) =>
//       project.get({ plain: true })
//     );

//     console.log("List of Projects", projectList);
//     res.status(200).json(projectData);
//     // res.render("tech-check-list", {techList});
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// 
router.get("/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id);
    const projectList = projectData.map((data) => data.get({ plain: true }));

    console.log("List of Projects", projectList);

    res.render("project-list", { projectList });
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a New Project 
// router.post('/', withAuth, async (req, res) => {
router.post("/", async (req, res) => {
  try {

    //Console logs for testing
    // console.log("req.body info -all: ", req.body);
    // console.log("req.body info - title: ", req.body.title);
    // console.log("req.body info - des: ", req.body.description);
    // console.log("req.body info cohort num: ",  req.body.cohort_id);
    // console.log("req.body info github_repo_link: ", req.body.github_repo_link);
    // console.log("req.body info technology Array: ", req.body.technology);
    // console.log("Project", req.session.project_manager_id)

    var projectID;

    Project.create({
        
      title: req.body.title,
      description: req.body.description,
      cohort_id: req.body.cohort_id,
      project_manager_id: req.session.project_manager_id,
      github_repo_link: req.body.github_repo_link
      
      
    }).then((project) => {
       projectID = project.dataValues.id
        // if there's technologies that have been selected bulk create in the ProjectTechnologies model
        if (req.body.technology.length) {
          const technologyTagArray = req.body.technology.map((technology_id) => {
            return {
              project_id: project.id,
              technology_id,
            };
          });
          return ProjectTechnologies.bulkCreate(technologyTagArray);
        }
      
    }).then((project) => {
    
        TeamMember.create({
          project_id: projectID,
          full_name:req.body.full_name1,
          github_username: req.body.github_username1
        })
      })

    
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});




router.post("/addMember", async (req, res) => {
  try {
    console.log("req.body.info", req.body);
    const newMember = await TeamMember.create({
      full_name: req.body.username,
      github_username: req.body.github_username,
      project_id: 1,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/projects", async (req, res) => {

  Project.findOne({
    where: { project_manager_id: req.session.project_manager_id },
    order: [
      ['id', 'DESC']
    ]
  }).then(lastProject => {
    console.log(lastProject.dataValues.id);
  });
  

})

module.exports = router;
