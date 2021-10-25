const db = require('../mysql');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const jwtSecurity = require('../Security/tokenSecurity');
const PostModels = require('../models/postModels');
require('dotenv').config();

let postModels = new PostModels();

exports.allPost = (req, res) => {
    postModels.allPost()
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        });
};

exports.createPost = (req, res) => {
    let userId = req.body.userId;
    let com = req.body.com;
    let img = req.body.img;
    let sqlInserts = [userId, com, img];
    postModels.createPost(sqlInserts)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
};

exports.updatePost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let com = req.body.com;
    let img = req.body.img;
    let postId = req.params.id;
    let sqlInserts1 = [postId];
    let sqlInserts2 = [com, img, postId, userId];
    postModels.modifyPost(sqlInserts1, sqlInserts2)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
};

exports.deletePost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    const postId = req.params.id;
    let sqlInserts1 = [postId];
    let sqlInserts2 = [postId, userId];
    postModels.delPost(sqlInserts1, sqlInserts2)
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
};

exports.comment = (req, res) => {
    let postId = req.params.id;
    let sqlInserts = [postId];
    postModels.comment(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        });
};

exports.createCom = (req, res) => {
    let userId = req.body.userId;
    const postId = req.params.id;
    let com = req.body.content;
    let sqlInserts = [userId, postId, com];
    postModels.createCom(sqlInserts)
        .then((response) => {
            res.status(201).json(JSON.stringify(response))
        })
};

exports.updateCom = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let com = req.body.content;
    let comId = req.params.id;
    let sqlInserts1 = [comId];
    let sqlInserts2 = [com, comId, userId];
    postModels.modifyCom(sqlInserts1, sqlInserts2)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
};

exports.deleteCom = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    const comId = req.params.id;
    let sqlInserts1 = [comId];
    let sqlInserts2 = [comId, userId];
    postModels.delCom(sqlInserts1, sqlInserts2)
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
};