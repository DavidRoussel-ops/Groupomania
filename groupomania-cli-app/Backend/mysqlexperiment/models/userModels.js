const db = require('../mysql');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecurity = require('../Security/tokenSecurity')

class userModels {
    constructor() {
    }
    signup(sqlInserts) {
        let insertSql = `INSERT INTO utilisateurs VALUES (NULL, ?,?,?,?, FALSE)`;
        insertSql = mysql.format(insertSql, sqlInserts);
        return new Promise(((resolve, reject) => {
            db.query(insertSql, function (err, result){
                if (err) reject({ error : "Erreur dans l'inscription !"});
                resolve({ message : result })
            })
        }))
    }
    login(sqlInserts, pass){
        let sql = `SELECT * FROM utilisateurs WHERE mail= ?`;
        sql = mysql.format(sql, sqlInserts);
        return new Promise((resolve, reject) => {
            db.query(sql, function (err, result) {
                if (err) reject({err});
                if (!result[0]){
                    reject({ error : "Utilisateur non trouvé !"});
                } else {
                    bcrypt.compare(pass, result[0].pass)
                        .then(valid => {
                            if (!valid) return reject({ error : "Mots de passe non valid!"});
                            resolve({
                                userId : result[0].id,
                                token : jwt.sign(
                                    {userId : result[0].id},
                                    jwtSecurity,
                                    {expiresIn: '24h'}
                                )
                            });
                        })
                        .catch(error => reject({ error }))
                }
            })
        })
    }
    showUser(sqlInserts) {
        let selectSql = `SELECT mail, lname, fname FROM utilisateurs WHERE id = ?`;
        selectSql = mysql.format(selectSql, sqlInserts);
        return new Promise((resolve, reject) => {
            db.query(selectSql, function (err, result) {
                if (err) return reject({ error : "Utilisateur introuvable!"});
                resolve(result);
            })
        })
    }
    modifyUser(sqlInserts) {
        let updateSql = `UPDATE utilisateurs SET mail = ?, lname = ?, fname = ? WHERE id = ?`;
        updateSql = mysql.format(updateSql, sqlInserts);
        return new Promise((resolve, reject) => {
            db.query(updateSql, function (err, result) {
                if (err) return reject({error : "Modification non enregistré!"});
                resolve({message : "Utilisateur modifié avec succès"});
            })
        })
    }
    delUser(sqlInserts) {
        let deleteSql = `DELETE FROM utilisateurs WHERE id = ?`;
        deleteSql = mysql.format(deleteSql, sqlInserts);
        return new Promise((resolve, reject) => {
            db.query(deleteSql, function (err, result){
                if (err) return reject({error : "Utilisateur non supprimé!"});
                resolve({message : "Utilisateur supprimé avec succès"});
            })
        })
    }
}

module.exports = userModels;