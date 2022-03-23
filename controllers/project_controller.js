const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const {Project} = require('../models');

router.get('/', async (req, res) => {
    try{
        res.json(await Project.find({}));
    } catch (err){
        res.status(400).json(err);
    }
})

 module.exports = router;