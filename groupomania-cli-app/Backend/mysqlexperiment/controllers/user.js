const db = require('../Security/mysql');

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
    let id = req.params.id;
    db.query('SELECT * FROM utilisateur WHERE id =' + id, (err, results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : 'Utilisateur non trouvé !'});
        } else {
            console.log({userId : results});
            res.status(200).json({message : results});
        }
    });
};

exports.createUser = (req, res) => {
    let email = req.body.mail;
    let mdp = req.body.pass;
    let lastname = req.body.lname;
    let firstname = req.body.fname;
    let insertUser = "INSERT INTO utilisateur (mail, pass, lname, fname)VALUES ('"+email+"','"+mdp+"','"+lastname+"','"+firstname+"')";
    db.query(insertUser, (err, results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : "Utilisateur non crée!"})
        } else {
            console.log({userInsert : results});
            res.status(201).json({message : "utilisateur crée!!"})
        }
    });
};

exports.updateUser = (req, res) => {
    db.connect(function () {
        let mdp = req.params.pass;
        let lastname = req.params.lname;
        let firstname = req.params.fname;
        let id = req.params.id;
        let newmdp = req.body.pass;
        let newlastname = req.body.lname;
        let newfirstname = req.body.fname;
        db.query('UPDATE utilisateur SET pass = ' + mdp + ', lname = ' + lastname + ',fname = ' + firstname + ', id= ' + id + ' WHERE pass=' + newmdp + ', lname =' + newlastname + ', fname = ' + newfirstname + '', (err, results) => {
            if (err) {
                console.log(err);
                res.status(400).json({message: "Utilisateur non modifié!"});
            } else {
                console.log({userUpdate: results});
                res.status(200).json({message: results})
            }
        });
    })
};

exports.deleteUser = (req, res) => {
    let id = req.params.id;
    db.query('DELETE FROM utilisateur WHERE id =' + id, (err, results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message: "Utilisateur non supprimé!"});
        } else {
            console.log({userDelete: results});
            res.status(200).json({message: results})
        }
    });
};