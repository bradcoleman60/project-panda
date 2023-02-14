const router = require('express').Router();

const projectRoutes = require('./project-routes');

const userRoutes = require('./user-routes');
const technologyRoutes = require('./technology-routes');


router.use('/projects', projectRoutes)
router.use('/users', userRoutes)
router.use('/technologies', technologyRoutes)
router.use('/addMember', projectRoutes)


module.exports = router;
