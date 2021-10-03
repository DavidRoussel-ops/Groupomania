const comSchema = {
    id : {type : String, required : true, unique : true},
    users : {type : String, required : true},
    com : {type : String, required : true}
};

module.exports = comSchema;