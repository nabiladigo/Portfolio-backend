const express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const router = express.Router();

const {Project} = require('../models');

router.get('/', async (req, res) => {
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
        console.log(req.body)
    }catch(err){
        res.status(400).json(err);
    };
})

 module.exports = router;