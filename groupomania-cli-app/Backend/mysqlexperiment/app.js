const express = require('express');
const mysql = require('./Security/mysql');
const moduleSecurity = require('./Security/module');
const app = express();

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const comRoutes = require('./routes/com');

app.use('/groupomania', postRoutes);
app.use('/groupomania', userRoutes);
app.use('/groupomania', comRoutes);

module.exports = app;