const router = require('express').Router();
const { Project } = require('../../models') 

router.get('/', async (req, res) => {
    try{
        const projectData = await Project.findAll()
        res.status(200).json(projectData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try
    {
        const projectData = await Project.findByPk(req.params.id)
        res.status(200).json(projectData)
    }
     catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;