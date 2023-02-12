const router = require('express').Router();
const {Cohort} = require('../../models') 


//Get all cohorts
router.get('/', async (req, res) => {
    try {
        const cohortData = await Cohort.findAll()
        res.status(200).json(cohortData)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;