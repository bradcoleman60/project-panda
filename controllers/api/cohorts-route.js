const router = require('express').Router();
const {Cohort, Project} = require('../../models') 


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

router.get('/:id', async (req, res) =>{
    try{
        const cohortData = Cohort.findByPk(req.params.id,{
            include: [{model: Project}]
        })
        res.status(200).json(cohortData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;