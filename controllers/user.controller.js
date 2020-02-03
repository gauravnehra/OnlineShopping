const User = require('../models/user.model.js');

exports.signup = async(req, res) => {
    var user = new User(req.body);
    await user.save();
    res.status(200).send(user);
}

exports.signin = async(req, res) => {
//TODO
}

exports.retrieveuser = async(req, res) => {
//TODO
}