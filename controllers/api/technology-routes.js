const router = require('express').Router();
const { ProjectTechnologies } = require('../../models') 
// const withAuth = require('../../utils/auth');

/* This post route receives the values of the technologies that the Project Manager checks 
 on the select technologies page when setting up a new project.NOTE: req.body includes the 
 checkBoxValues array*/ 
router.post('/', async (req, res) => {
  try {
    console.log("req.body info: ", req.body)
    await ProjectTechnologies.bulkCreate(req.body.checkBoxValues);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;