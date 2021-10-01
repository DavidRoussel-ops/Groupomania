const mysql = require('mysql');
let CURRENT_TIMESTAMP = mysql.raw('now()');
const postSchema = {
    id : {type : String, required : true},
    users : {type : String, required: true},
    nom : {type : String, required : true},
    prenom : {type : String, required : true},
    date_diff : CURRENT_TIMESTAMP,
    txt : {type : String, required : false},
    img : {type : String, required : false},
}

module.exports = postSchema;