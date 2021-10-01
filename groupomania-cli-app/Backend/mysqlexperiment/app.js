const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'stephanie',
    password : 'Stephgroupo',
    database : 'groupomania'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connecter à MySQL Server!');
});

app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

app.use(bodyParser.json());

module.exports = app;