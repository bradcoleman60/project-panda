const router = require("express").Router();

// const sequelize = require("../config/connection");

const {Cohort, ProjectTechnologies, ProjectManager, Project, Technology, TeamMember } = require("../models");

//Get all Technologies for Create New Project Flow - Check Box Area
router.get("/tech", async (req, res) => {
  try {
    const techData = await Technology.findAll();

    const techList = techData.map((data) => data.get({ plain: true }));

    // console.log("List of Tech", techList);

    res.render("tech-check-list", { techList });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
<<<<<<< Updated upstream



// Get all projects by project manager id
router.get('/project/:id', async (req, res) => {
  try{
    const projectsData = await Project.findAll({
        where: {
          project_manager_id: req.params.id
    }
    })

    const projectList = projectsData.map((project) =>
    project.get({plain: true}))

    console.log(projectsData)
    // res.json(projectsData)
    res.render('projectList', {projectList,
      logged_in: req.session.logged_in
    });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
=======
// Render project list by id
// router.get("/projects/1", async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: ProjectManager,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const projects = projectData.get({ plain: true });

//     res.render("projectList", {
//       ...projects,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Get all projects by project manager id
router.get('/projects/:id', async (req, res) => {
  try{
      const projectsData = await Project.findAll({
          where: {
            project_manager_id: req.params.id
      }
      })

      const projectList = projectsData.map((project) =>
      project.get({plain: true}))

      console.log(projectsData)
      // res.json(projectsData)
      res.render("allProjects", {projectList});
>>>>>>> Stashed changes
  }
  catch(err){
      res.status(500).json(err)
  }
})


//Get all cohorts to render the cohort list on the homepage
router.get('/', async (req, res) =>{
    try{
       const cohortData = await Cohort.findAll()

       const cohortList = cohortData.map((cohort) => 
       cohort.get ({plain: true}))
   
       console.log("List of Cohorts", cohortList);
   
       res.render("homepage", {cohortList});

    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get all projects by the cohort id 
router.get('/cohorts/:id', async (req, res) => {
    try{
        const projectsData = await Project.findAll({
            where: {
            cohort_id: req.params.id
        }
        })

        const projectList = projectsData.map((project) =>
        project.get({plain: true}))

        console.log(projectsData)
        // res.json(projectsData)
        res.render("allProjects", {projectList});

    }
    catch(err){
        res.status(500).json(err)
    }
})


router.get('/projects/:id', async (req, res) =>{
    try{
        console.log("i am here")
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                  model: Technology, through: { attributes: [] }
                },
                {model: TeamMember}
            ] 
        })
        console.log(projectData)
        const projects = projectData.get({ plain: true });

        res.render('projectInfo', projects)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Renders the Login Form 
router.get('/login', async (req, res) => {
  res.render('login');
    
});

//Renders the Create Project Description Form 
router.get('/createDescr', async (req, res) => {
  res.render('createDescr');
    
});

//Renders the registration form 
router.get('/register', (req, res) => {
  res.render('register');
    
});

//Renders the add members to a project form
router.get('/createMember', (req, res) => {
  res.render('createMember');
    
});



module.exports = router;
