const db = require('../mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwtSecurity = require('../Security/tokenSecurity');


exports.createPost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    const com = req.body.com;
    let img = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    db.query(`INSERT INTO post VALUES (NULL, ?, NOW(), ?, ?)`, [userId, com, img], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("1 post enregistrer");
            res.status(201).json({ message: "1 post enregistre" });
        }
    });
};

exports.showPost = (req, res) => {
    db.query(`SELECT utilisateur.fname, post.id, post.com, post.img, post.date, post.user_id FROM utilisateur INNER JOIN post ON utilisateur.id = post.user_id ORDER BY date desc`, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            res.status(201).json(result);
        }
    });
};

exports.showPostById = (req, res) => {
    let post_id = req.params.id;
    db.query(`SELECT utilisateur.id, utilisateur.mail, utilisateur.lname, utilisateur.fname, utilisateur.admin, post.id, post.com, post.img, post.date, post.user_id FROM utilisateur INNER JOIN post ON utilisateur.id = post.user_id WHERE post.id = ?`, [post_id], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            res.status(201).json(result);
        }
    });
};

exports.deletePost = (req, res) => {
    const post_id = req.params.id;
    const filename = req.body.img;
    const goodFile = filename.split('/images/')[1];
    let sql = `DELETE FROM post WHERE id=${post_id}`;
    fs.unlink(`images/${goodFile}`, () => {
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(400).json("error");
            } else {

                console.log("Post supprimé");
                return res.status(200).json(result);
            }
        });
    })
};