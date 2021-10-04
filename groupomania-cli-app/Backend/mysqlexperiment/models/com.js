const connection = require('../Security/mysql');

exports.getCom = (result) => {
    connection.query('SELECT * FROM comment', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({comment : results});
            result(null, results);
        }
    });
};

exports.getComById = (id,result) => {
    connection.query('SELECT * FROM comment WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({commentId : results});
            result(null, results[0]);
        }
    });
};

exports.insertCom = (data, result) => {
    connection.query('INSERT INTO comment SET ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({commentInsert : results});
            result(null, results);
        }
    });
};

exports.updateComById = (data, id, result) => {
    connection.query('UPDATE comment SET com = ? WHERE id = ?', [data.com, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({commentUpdate : results});
            result(null, results);
        }
    })
};

exports.deleteComByID = (id, result) => {
    connection.query('DELETE FROM comment WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({commentDelete : results});
            result(null, results);
        }
    })
};