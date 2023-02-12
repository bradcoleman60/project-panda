const router = require('express').Router();
const {Cohort, Project, ProjectManager} = require('../../models') 


//Get all cohorts
router.get('/', async (req, res) => {
    try {
        //missing await keyword
        const cohortData = await Cohort.findAll()
        res.status(200).json(cohortData)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//Get projects by cohort
// router.get('/:id', async (req, res) =>{
//     try{
//         const cohortProjects = await Cohort.findByPk(req.params.id,{
//          include: [{ model: Project}]
//         })
//         res.status(200).json(cohortProjects)
//         console.log("cohort projects:", cohortProjects)
//         const projectList = cohortProjects.map((data) => 
//         data.get ({plain: true}))
//         res.status(200).json(projectList)
//         console.log("List of Projects", projectList );

//         res.render("projectList", {projectList});
        
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

router.get('/:id', async (req, res) => {
    try{
        const projectsData = await Project.findAll({
            where: {
            cohort_id: req.params.id
        }
        })
        console.log(projectsData)
        res.json(projectsData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;