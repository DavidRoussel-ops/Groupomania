const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('./Security/mysql');
const app = express();
app.use(bodyParser.json());

app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const comRoutes = require('./routes/com');

app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/com', comRoutes);

module.exports = app;