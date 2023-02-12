const router = require('express').Router();
const cohortRoutes = require('./cohorts-route')
const projectRoutes = require('./project-routes')

router.use('/cohorts', cohortRoutes)
router.use('/projects', projectRoutes)
router.use('/addMember', projectRoutes)


module.exports = router;
