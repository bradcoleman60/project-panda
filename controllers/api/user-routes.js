const router = require('express').Router()
const { ProjectManager, TeamMember } = require('../../models')




router.post('/', async (req, res) => {
    try {
        const managerData = await ProjectManager.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(200).json(managerData);
    } catch (err) {
      res.status(400).json(err);
    }
});


router.post('/addMember', async (req, res) => {
  console.log(req.body)
  try {
    console.log("req.body.info", req.body);
    const newMember = await TeamMember.create({
      full_name: req.body.full_name,
      github_username: req.body.github_username,
      project_id: 1,
    });

    res.status(200).json(newMember);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;