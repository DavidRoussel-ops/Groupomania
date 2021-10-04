const {getUser, getUserById, insertUser, updateUserById, deleteUserById} = require("../models/user");

exports.showUser = (req, res) => {
    getUser((err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({user : results})
        }
    });
};

exports.showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({userId : results})
        }
    });
};

exports.createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({userCreate : results})
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