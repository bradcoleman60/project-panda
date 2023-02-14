const router = require('express').Router()

const { ProjectManager, TeamMember } = require('../../models')


// // regform
// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


router.post('/', async (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
    try {
        const managerData = await ProjectManager.create(req.body);
        //     username: req.body.username,
        //     password: req.body.password,
        // });

        req.session.save(() => {
          req.session.id = managerData.id;
          req.session.logged_in = true;
    
          res.status(200).json(managerData);
        });
        // res.status(200).json(managerData);
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
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;