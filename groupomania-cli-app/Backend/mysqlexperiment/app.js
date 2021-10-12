const express = require('express');
const mysql = require('./Security/mysql');
const bodyParser = require('body-parser');
const moduleSecurity = require('./Security/module');
const app = express();

//Header utiliser par l'application.
app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

app.use(bodyParser.json());

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const comRoutes = require('./routes/com');

app.use('/groupomania', postRoutes);
app.use('/user', userRoutes);
app.use('/groupomania', comRoutes);

module.exports = app;