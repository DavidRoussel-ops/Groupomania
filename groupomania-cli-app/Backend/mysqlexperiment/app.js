const express = require('express');
const bodyParser = require('body-parser');
//const mysqlServe = require('mysql');

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

app.use("/save_user", (((req, res) => {
    const newUser = req.query;
    const query = "INSERT INTO users SET ?";
    let TIMESTAMP = mysql.raw('now()');
    const data = {
        id : 1,
        email : "martinjean@gmail.com",
        mots_de_passe : "Supermartin",
        nom : "Martin",
        prenom : "Jean",
    }
    connection.query(query,data,(err,result,fields) => {
        if (err) throw err;
        res.json({saved : result.affectedRows})
    });
})));

app.use("/save_post", ((req, res) => {
    const request = req.query;
    const query = "INSERT INTO post SET ?";
    let CURRENT_TIMESTAMP = mysql.raw('now()');
    const params = {
        id : 1,
        users : 1,
        nom : "Martin",
        prenom : "Jean",
        date_diff : CURRENT_TIMESTAMP,
        txt : "C'est génial !",
        img : "",
    }
    connection.query(query,params,(err,result,fields) => {
        if (err) throw err;
        res.json({saved : result.affectedRows})
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