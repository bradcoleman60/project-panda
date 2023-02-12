const router = require('express').Router();
const { Project, TeamMember } = require('../../models') 
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try{
        const projectData = await Project.findAll()
        res.status(200).json(projectData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try
    {
        const projectData = await Project.findByPk(req.params.id)
        res.status(200).json(projectData)
    }
     catch(err){
        res.status(500).json(err)
    }
})



// router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    console.log("req.body info: ", req.body)
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newProject);
    console.log("NEW PROJECT: ", newProject)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/addMember', async (req, res) => {
  try {
    console.log("req.body.info", req.body);
    const newMember = await TeamMember.create({
      full_name: req.body.username,
      github_username: req.body.username,
      project_id: 1,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;