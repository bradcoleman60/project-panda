const router = require('express').Router();
const { ProjectTechnologies } = require('../../models') 
// const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
  try {
    console.log("req.body info: ", req.body)
    const newTechnology = await ProjectTechnologies.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });
    
    res.status(200).json(newTechnology);
    console.log("NEW TECHNOLOGY: ", newTechnology)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;