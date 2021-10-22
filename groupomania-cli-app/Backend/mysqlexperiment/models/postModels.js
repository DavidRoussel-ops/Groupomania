const db = require('../mysql');
const mysql = require('mysql');

class postModels {
    constructor() {
    }

    allPost(sqlInserts){
        let allPost =`SELECT utilisateur.fname, groupo.post.id, groupo.post.com, groupo.post.img, groupo.post.date, groupo.post.user_id FROM utilisateur INNER JOIN post ON utilisateur.id = groupo.post.user_id ORDER BY date desc`;
        allPost = mysql.format(allPost, sqlInserts)
        return new Promise((resolve) => {
            db.query(allPost, function (err, result){
                if (err) throw err;
                resolve(result)
            })
        })
    }
    createPost(sqlInserts){
        let insertPost = 'INSERT INTO groupo.post VALUES (NULL, ?, NOW(), ?, ?)';
        insertPost = mysql.format(insertPost, sqlInserts);
        return new Promise((resolve) => {
            db.query(insertPost, function (err, result) {
                if (err) throw err;
                resolve({ message : 'Post crée avec succès'});
            })
        })
    }
    modifyPost(sqlInserts1, sqlInserts2) {
        let upPost1 = `SELECT * FROM groupo.post WHERE id = ?`;
        upPost1 = mysql.format(upPost1, sqlInserts1);
        return new Promise((resolve, reject) => {
            db.query(upPost1, function (err, result) {
                if (err) throw err;
                if (sqlInserts2[3] === result[0].userId) {
                    let upPost2 = `UPDATE groupo.post SET date = NOW(), com = ?, img = ? WHERE id = ? AND user_id = ?`;
                    upPost2 = mysql.format(upPost2, sqlInserts2);
                    db.query(upPost2, function (err, result) {
                        if (err) throw err;
                        resolve({ message : 'Post modifié avec succès'});
                    })
                } else {
                    reject({error : 'Modification impossible'})
                }
            })
        })
    }
    delPost(sqlInserts1, sqlInserts2) {
        let delPost1 = `SELECT * FROM groupo.post WHERE id = ?`;
        delPost1 = mysql.format(delPost1, sqlInserts1);
        return new Promise((resolve, reject) => {
            db.query(delPost1, function (err, result) {
                if (err) throw err;
                if (sqlInserts2[1] === result[0].userId) {
                    let delPost2 = `DELETE FROM groupo.post WHERE id = ? AND user_id = ?`;
                    delPost2 = mysql.format(delPost2, sqlInserts2);
                    db.query(delPost2, function (err, result) {
                        if (err) throw err;
                        resolve({ message : 'Post supprimer avec succès'});
                    })
                } else {
                    reject({ error : 'Post non supprimé'})
                }
            })
        })
    }
    comment(sqlInserts){
        let comment = `SELECT utilisateur.fname, utilisateur.admin, com.id, com.content, com.date, com.user_id FROM utilisateur INNER JOIN com ON utilisateur.id = com.user_id WHERE com.post_id = ? ORDER BY id desc`;
        comment = mysql.format(comment, sqlInserts);
        return new Promise((resolve) => {
            db.query(comment, function (err, result) {
                if (err) throw err;
                resolve(result);
            })
        })
    }
    createCom(sqlInserts) {
        let insertCom = `INSERT INTO com VALUES (NULL, ?, ?, NOW(), ?)`;
        insertCom = mysql.format(insertCom, sqlInserts);
        return new Promise((resolve) => {
            db.query(insertCom, function (err, result) {
                if (err) throw err;
                resolve({ message : 'Commentaire crée avec succès'})
            })
        })
    }
    modifyCom(sqlInserts1, sqlInserts2) {
        let upCom1 = `SELECT * FROM groupo.com WHERE id = ?`;
        upCom1 = mysql.format(upCom1, sqlInserts1);
        return new Promise((resolve, reject) => {
            db.query(upCom1, function (err, result) {
                if (err) throw err;
                if (sqlInserts2[2] === result[0].userId) {
                    let upCom2 = `UPDATE com SET content = ? WHERE id = ? AND user_id = ?`;
                    upCom2 = mysql.format(upCom2, sqlInserts2);
                    db.query(upCom2, function (err, result) {
                        if (err) throw err;
                        resolve({ message : 'Commentaire modifié avec succès'})
                    })
                } else {
                    reject({ error : 'Modification impossible'});
                }
            })
        });
    }
    delCom(sqlInserts1, sqlInserts2) {
        let delCom1 = `SELECT * FROM groupo.com WHERE id = ?`;
        delCom1 = mysql.format(delCom1, sqlInserts1);
        return new Promise((resolve, reject) => {
            db.query(delCom1, function (err, result) {
                if (err) throw err;
                if (sqlInserts2[1] === result[0].userId) {
                    let delCom2 = `DELETE FROM com WHERE id = ? AND user_id = ?`;
                    delCom2 = mysql.format(delCom2, sqlInserts2);
                    db.query(delCom2, function (err, result) {
                        if (err) throw err;
                        resolve({ message : 'Commentaire supprimé !'});
                    })
                } else {
                    reject({ error : 'Suppression impossible'});
                }
            });
        })
    }
}

module.exports = postModels;
