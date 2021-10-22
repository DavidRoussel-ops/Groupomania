const express = require('express');
const bodyParser = require('body-parser');
const moduleSecurity = require('./Security/module');
const cors = require('cors')
const path = require('path');
const app = express();

require('dotenv').config();

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
let corsOption = {
    origin : "http://localhost:8080"
}

const port = process.env.PORT;

//Header utiliser par l'application.
app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, function () {
    console.log(`listen on port ${port}`);
});

