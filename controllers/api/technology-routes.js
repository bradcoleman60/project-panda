const router = require('express').Router();
const { ProjectTechnologies } = require('../../models') 
// const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
  try {
    console.log("req.body info: ", req.body)
    await ProjectTechnologies.bulkCreate(req.body.checkBoxValues);
        
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;