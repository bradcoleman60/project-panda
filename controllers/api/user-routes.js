const router = require('express').Router()
const {ProjectManager} = require('../../models')




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


module.exports = router;