const mongoose = require('mongoose');

const sewakSchema = mongoose.Schema({
    name : {type : String, required : true},
    address : {type : String, required : true},
    phone : {type : Number, required : true},
    age : {type : String, required : true},
    shakha : {type : String, required : true},
    sanghAge : {type : String, required : true},
    training : {type : String, required : true},
    blood : {type : String, required : true},
    email : {type : String, required : true},
    adminID : {type : String}
});

const SewakModel = mongoose.model("suchi", sewakSchema);

module.exports = {
    SewakModel
}