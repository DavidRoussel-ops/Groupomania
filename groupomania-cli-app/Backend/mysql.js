const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'stephanie',
    password : 'Stephgroupo',
    database : 'Groupomania'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
    if (error) throw error;
    console.log('La solution est : ', results[0].solution);
});

connection.end();uu