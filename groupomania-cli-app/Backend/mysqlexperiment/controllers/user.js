const db = require('../Security/mysql');
const {getUser, getUserById, insertUser, updateUserById, deleteUserById} = require("../models/user");

exports.showUser = (req, res) => {
    db.query('SELECT * FROM utilisateur', (err , results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : 'Oups !'});
        } else {
            console.log({users : results});
            res.status(200).json({message : results});
        }
    });
};

exports.showUserById = (req, res) => {
    let id = req.params.id;
    db.query('SELECT * FROM utilisateur WHERE id =?', [id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : 'Oups !'});
        } else {
            console.log({users : results});
            res.status(200).json({message : results});
        }
    });
};

exports.createUser = (req, res) => {
    let email = req.body.mail;
    let mdp = req.body.pass;
    let lastname = req.body.lname;
    let firstname = req.body.fname;
    let insertUser = "INSERT INTO utilisateur (mail, pass, lname, fname) VALUES ('"+email+"','"+mdp+"','"+lastname+"','"+firstname+"')";
    db.query(insertUser, (err, results) => {
        if (err) {
            console.log(err);
            res.status(400).json({message : "Oups!"})
        } else {
            console.log({userInsert : results});
            res.status(201).json({message : "utilisateur crée!!"})
        }
    });
};

exports.updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUserById(data, id,(err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({userUpdate : results})
        }
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({userdelete : results})
        }
    });
};