const userSchema = {
    id : {type : String, required : true, unique : true},
    email : {type : String, required : true, unique : true},
    mots_de_passe : {type : String, required : true},
    nom : {type : String, required : true},
    prenom : {type : String, required : true},
};

module.exports = userSchema;