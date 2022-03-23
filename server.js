const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const controllers = require('./controllers');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.json()); // parse json bodies
app.use(morgan('dev')); // logging
app.use('/project', controllers.project);


app.get("/", (req,res) =>{
    res.send("Hello World!");
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
