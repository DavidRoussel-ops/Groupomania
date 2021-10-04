const express = require('express');
const mysql = require('./Security/mysql');
const moduleSecurity = require('./Security/module');
const app = express();

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const comRoutes = require('./routes/com');

app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/com', comRoutes);

module.exports = app;