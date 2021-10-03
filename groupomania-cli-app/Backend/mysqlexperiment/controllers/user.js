const connection = require('../Security/mysql');
const User = require('../models/user')

exports.createUser = (req, res, next) => {
    const userInsert = req.query;
    const insertUser = "INSERT INTO users SET ?";
    const insert = new User({
        ...userInsert
    })
    connection.query(insertUser,insert,(err,result,fields) => {
        if (err) throw err;
        res.json({saved : result.affectedRows})
    });
};

exports.updateUser = (req, res, next) => {
    const userUpdate = req.query;
    const updateUser = "UPDATE users SET nom=userUpdate, prenom=userUpdate WHERE id=userUpdate";
    const update = User({
        ...userUpdate
    })
    connection.query(updateUser,update,(err,result,fields) => {
        if (err) throw err;
        res.json({update : result.affectedRows})
    });
};

exports.deleteUser = (req, res, next) => {
    const userDelete = req.query;
    const deleteUser = "DELETE FROM users WHERE id=userDelete";
    const suppression = User({
        ...userDelete
    })
    connection.query(deleteUser,suppression,(err,result,fields) => {
        if (err) throw err;
        res.json({delete : result.affectedRows})
    });
};