const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    { 
        name:{
            type:String,
        },
        live:{
            type:String
        },
        git:{
            type:String
        },
        image:{
            type:String
        }
    }
);



const Project= mongoose.model('Project', projectSchema);

module.exports = Project;