const db = require('../mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwtSecurity = require('../Security/tokenSecurity');


exports.createCom = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    const post_id = req.params.id;
    const content = req.body.content;
    db.query(`INSERT INTO com VALUES (NULL, ?, ?, NOW(), ?)`, [userId, post_id, content], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("1 nouveau commentaire");
            res.status(201).json({ message: "1 nouveau commentaire" });
        }
    });
};

exports.showCom = (req, res) => {
    const post_id = req.params.id;
    db.query(`SELECT utilisateur.fname, utilisateur.admin, com.id, com.content, com.date, com.user_id FROM utilisateur INNER JOIN com ON utilisateur.id = com.user_id WHERE com.post_id = ? ORDER BY id desc`, [post_id], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("Tous les commentaires.");
            res.status(201).json(result);
        }
    });
};

exports.deleteCom = (req, res) => {
    const com_id = req.body.id;
    let sql = `DELETE FROM com WHERE id=${com_id}`;
    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("error");
        } else {
            console.log("Commentaire supprimé.");
            return res.status(200).json(result);
        }
    });
};