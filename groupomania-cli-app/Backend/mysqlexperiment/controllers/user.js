const db = require('../mysql');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const jwtSecurity = require('../Security/tokenSecurity')
const bcrypt = require('bcrypt');
const userModels = require('../models/userModels');
require('dotenv').config();

let models = new userModels();

exports.signup = (req, res) => {
    const mail = req.body.mail;
    const pass = req.body.pass;
    const lastName = req.body.lname;
    const firstName = req.body.fname;
    bcrypt.hash(pass, 10)
        .then(hash => {
            let sqlInserts = [mail, hash, lastName, firstName];
            models.signup(sqlInserts)
                .then((response) => {
                    res.status(201).json(JSON.stringify(response))
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).json({error})
            })
        })
        .catch(error => res.status(500).json(error));
};

exports.login = (req, res) => {
    const mail = req.body.mail;
    const pass = req.body.pass;
    let sqlInserts = [mail];
    models.login(sqlInserts, pass)
        .then((response) => {
            res.status(200).json(JSON.stringify(response))
        })
        .catch((error) => {
            res.status(400).json(error)
    })

}

exports.showUserById = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let sqlInserts = [userId];
    models.showUser(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response))
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        })
};

exports.updateUser = (req, res) => {
    const mail = req.body.mail;
    const lastName = req.body.lname;
    const firstName = req.body.fname;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let sqlInserts = [mail, lastName, firstName, userId];
    models.modifyUser(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json(error)
        })
};

exports.deleteUser = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let sqlInserts = [userId];
    models.delUser(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response))
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error)
        })
};