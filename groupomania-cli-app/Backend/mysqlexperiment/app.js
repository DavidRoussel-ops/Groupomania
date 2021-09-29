const express = require('express');
const bodyParser = require('body-parser');
const mysqlServe = require('mysql');

const post = require('./models/post')

const app = express();

app.use(((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}));

app.use(bodyParser.json());

app.post('/api/stuff', ((req, res, next) => {
    const post = new post({
        ...req.body
    });
}));

app.use('/api/stuff', ((req, res, next) => {
    const stuff = [
        {
            id : 1,
            users : 1,
            nom : 'Martin',
            prenom : 'Jean',
            date_diff : '29/09/2021 17h00',
            txt : 'Hello World !',
            img : ''
        },
    ];
    res.status(200).json(stuff);
}))

module.exports = app;