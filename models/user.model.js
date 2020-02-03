const mongoose = require('mongoose');        //; is optional

let userSchema = new mongo.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true}
})

module.exports = mongoose.model("User", userSchema);