const db = require('../Security/mysql');

exports.getUser = (req, res) => {

};

exports.getUserById = (id, result) => {

};

exports.insertUser = (req , res) => {

};

exports.updateUserById = (data, id, result) => {
    connection.query('UPDATE users SET mots_de_passe = ?, nom = ?, prenom = ? WHERE id = ?', [data.mots_de_passe, data.nom, data.prenom, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({userUpdate : results});
            result (null, results)
        }
    });
};

exports.deleteUserById = (id, result) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({userdelete : results});
            result (null, results)
        }
    });
};