const postSchema = {
   id : { type : Number, required : true},
   users : { type : Number, required: true},
   nom : { type : String, required : true},
   prenom : { type : String, required : true},
   date_diff : { type : Number, required : true},
   txt : { type : String, required : false},
   img : { type : String, required : false}
};

module.exports = postSchema;