const express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const router = express.Router();

const {Project} = require('../models');

router.get('/', async (req, res) => {
//    res.json(projects);
    try{
        res.json(await Project.find({}));
    } catch (err){
        res.status(400).json(err);
    }
});
router.get('/:id', async(req, res)=>{
    try{
        res.json(await Project.findOne({'_id': req.params.id}));
        
    }catch(err){
        res.status(400).json(err);
    };
})

router.post('/', async(req, res)=>{
    try{
        res.json(await Project.create(req.body));

        console.log("//////////////////////////////")
        console.log("//////////////////////////////")
        console.log(req.body)
        console.log("//////////////////////////////")
        console.log("//////////////////////////////")
    }catch(err){
        res.status(400).json(err);
    };
});

router.put('/edit/:id', async(req, res)=>{
    try{
        const {name, image, live, git} = req.body;
        const project = await Project.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
            );
            const editProject = project.save();

            console.log("//////////////////////////////")
            console.log("//////////////////////////////")
            console.log(editProject)
            console.log("//////////////////////////////")
            console.log("//////////////////////////////")

            return res.status(200).json(editProject);
    }catch(err){
        return res.status(400).json(err)
    }
})

 module.exports = router;