const router = require('express').Router();
const cohortRoutes = require('./cohorts-route')
const projectRoutes = require('./project-routes')
const userRoutes = require('./user-routes');

router.use('/cohorts', cohortRoutes)
router.use('/projects', projectRoutes)
router.use('/users', userRoutes)

module.exports = router;
