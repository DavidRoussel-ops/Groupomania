const connection = require('../Security/mysql');

exports.getPost = (result) => {
    connection.query('SELECT * FROM post', (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({post : results});
            result(null, results);
        }
    })
}

exports.getPostById = (id, result) => {
    connection.query('SELECT * FROM post WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({postId : results});
            result(null, results[0]);
        }
    })
}

exports.insertPost = (data, result) => {
    connection.query('INSERT INTO post SET ?', [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({postInsert : results});
            result(null, results);
        }
    })
}

exports.updatePostById = (data, id, result) => {
    connection.query('UPDATE post SET nom = ?, prenom = ?, date_diff = CURRENT_TIMESTAMP, txt = ?, img = ? WHERE id = ?', [data.nom, data.prenom, data.date_diff, data.txt, data.img, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({postUpdate : results});
            result(null, results);
        }
    })
}

exports.deletePostById = (id, result) => {
    connection.query('DELETE FROM post WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            console.log({postdelete : results});
            result(null, results);
        }
    })
}