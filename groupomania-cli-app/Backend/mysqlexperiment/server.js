const express = require('express');
const bodyParser = require('body-parser');
const moduleSecurity = require('./Security/module');
const path = require('path');
const app = express();

require('dotenv').config();

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const comRoutes = require('./routes/com');

const port = process.env.PORT;

//Header utiliser par l'application.
app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/com', comRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, function () {
    console.log(`listen on port ${port}`);
});

