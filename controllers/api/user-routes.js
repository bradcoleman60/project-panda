const router = require('express').Router()
const { ProjectManager } = require('../../models')




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

// Trying to validate login info
router.post('/login', async (req, res) => {
    try {
      const userData = await ProjectManager.findOne({ where: { username: req.body.username }});
  

    //   if (!userData) {
    //     res.status(400).json({ message: 'Incorrect username or password, please try again' });
    //     return;
    //   }
  
    //   const validPassword = await userData.checkPassword(req.body.password);
  
    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect username or password, please try again' });
    //     return;
    //   }
  
    console.log('This is from userdata', req.body.username);
      req.session.save(() => {
        // req.session.username = userData;
        req.session.project_manager_id = userData.dataValues.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
        console.log(userData.dataValues.id);
      });

  
    } catch (err) {
      res.status(400).json(err);
      console.log(res.status(400).json(err));
    }
  });


module.exports = router;