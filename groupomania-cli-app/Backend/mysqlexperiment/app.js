const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'stephanie',
    password : 'Stephgroupo',
    database : 'groupomania'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connecter à MySQL Server!');
    /*connection.query("CREATE DATABASE Groupomania", function (err, result){
        if (err) throw err;
        console.log("BDD crée!");
    })*/
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
    if (error) throw error;
    console.log('La solution est : ', results[0].solution);
});

connection.end();