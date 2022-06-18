const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// const controllers = require('./controllers');
const app = express();
const PORT = process.env.PORT || 4000;

const projects = require('./projects.json');
const about =require('./about.json');
const contact =require('./contact.json')

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.json()); // parse json bodies
app.use(morgan('dev')); // logging
// app.use('/projects', controllers.project);



//home route for testing our app
app.get('/', (req,res) =>{
    res.send('Hello World!');
});

// route for retrieving projects
app.get('/projects', (req, res) =>{
    // send projectes via JSON
    res.json(projects);
});
app.get('/home', (req, res) =>{
    // send projectes via JSON
    res.json(home);
});


// app.get('/about', (req,res) =>{
    
//     res.json(about);
// });
// app.get('/contact', (req,res) =>{
    
//     res.json(contact);
// });
// app.get('/resume', (req,res) =>{
    
//     res.json(resume);
// });



app.listen(PORT, () => console.log(`listening on port ${PORT}`));
