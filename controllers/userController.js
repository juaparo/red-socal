const mongoose = require('mongoose');

exports.layOut = (req, res) => {
    res.render('index');
}
exports.signInView = (req, res) => {
    res.render('users/signin');
}

exports.signUpForm = (req, res) => {
    res.render('users/signup')
}

exports.about = (req, res) => {
    res.render('about')
}
    
