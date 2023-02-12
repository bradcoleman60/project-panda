const router = require('express').Router();
const cohortRoutes = require('./cohorts-route')
const projectRoutes = require('./project-routes')

router.use('/cohorts', cohortRoutes)
router.use('/projects', projectRoutes)


module.exports = router;
