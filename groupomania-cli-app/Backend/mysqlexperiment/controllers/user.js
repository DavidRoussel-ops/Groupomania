const db = require('../mysql');
const jwt = require('jsonwebtoken');
const jwtSecurity = require('../Security/tokenSecurity')
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.signup = (req, res) => {
    bcrypt.hash(req.body.pass, 10)
        .then(hash => {
            const mail = req.body.mail;
            const lastName = req.body.lname;
            const firstName = req.body.fname;
            let insertSql = `INSERT INTO utilisateur VALUES (NULL,` + db.escape(mail) + `, '${hash}', `  + db.escape(lastName) + `,` + db.escape(firstName) + `, 0)`;
            db.query(insertSql, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(400).json(err);
                } else {
                    console.log("1 utilisateur enregistrer");
                    db.query(`SELECT * FROM utilisateur WHERE mail = '${req.body.mail}'`, function (err, result) {
                        return res.status(201).json({
                            token: jwt.sign(
                                { userId: result[0].id },
                                jwtSecurity,
                                { expiresIn: '24h' }
                            ),
                            result
                        });
                    });
                }
            });
        });
};

exports.login = (req, res) => {
    const mail = req.body.mail;
    db.query(`SELECT * FROM utilisateur WHERE mail =` + db.escape(mail), function (err, result) {
        if (result.length > 0) {
            bcrypt.compare(req.body.pass, result[0].pass)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mauvais mots de passe' });
                    } else {
                        console.log("Utilisateur connecté !");
                        return res.status(200).json({
                            token: jwt.sign(
                                { userId: result[0].id },
                                jwtSecurity,
                                { expiresIn: '24h' }
                            ),
                            result
                        });
                    }
                });
        }
        else {
            return res.status(404).json({ error: 'Utilisateur non trouvé !' });
        }
    });
}

exports.showUser = (req, res) => {
    db.query('SELECT * FROM utilisateur', (err , results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : 'Liste des utilisateurs non trouvé !'});
        } else {
            console.log({users : results});
            res.status(200).json({message : results});
        }
    });
};

exports.showUserById = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    db.query(`SELECT utilisateur.mail, utilisateur.lname, utilisateur.fname FROM utilisateur WHERE utilisateur.id =  ?`, [userId], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("Utilsateur non trouvé!");
        } else {
            console.log("1 utilisateur trouvé");
            res.status(201).json(result);
        }
    });
};

exports.updateUser = (req, res) => {
    bcrypt.hash(req.body.pass, 10)
        .then(hash => {
            const mail = req.body.mail;
            const lastName = req.body.lname;
            const firstName = req.body.fname;
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, jwtSecurity);
            const userId = decodedToken.userId;
            db.query("UPDATE utilisateur SET mail = ?, lname = ?, fname = ?, password = ${hash} WHERE id = ?", [mail, lastName, firstName, userId], function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(400).json("Modification non possible !");
                } else {
                    res.status(201).json({ message: "1 utilisateur modifié" });
                }
            });
        });
};

exports.deleteUser = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecurity);
    const userId = decodedToken.userId;
    let deleteSql = `DELETE FROM utilisateur WHERE id= ?`;
    db.query(deleteSql, [userId], function (err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json("utilisateur non supprimer");
        } else {
            console.log("Utilisateur supprimé");
            return res.status(200).json(result);
        }
    });
};