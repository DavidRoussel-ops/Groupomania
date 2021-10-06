const connection = require('../Security/mysql');

exports.getUser = (result) => {
    connection.query('SELECT * FROM users', (err , results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({users : results});
            result(null, results);
        }
    });
};

exports.getUserById = (id, result) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({userId : results});
            result (null, results[0]);
        }
    });
};

exports.insertUser = (data, result) => {
    connection.query('INSERT INTO users SET id = ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({userInsert : results});
            result (null, results)
        }
    });
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