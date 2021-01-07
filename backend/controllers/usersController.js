const User = require('../models/User');
const bcrypt = require('bcrypt');

// get all users
exports.findAllUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new user
exports.createNewUser = (req, res) => {
    console.log('******************************************');

    // hash Pasword
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) throw err
        console.log('hash Pass:', hash)
        req.body.password = hash;
        console.log('create user: ',req.body);

        const newUser = new User(req.body);
        newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    }); 
}

//user loged in 
exports.loginUser = (req, res) => {
    console.log('******************************************');
    console.log('log in user: ',req.body);

    User.findOne({ email: req.body.email })
    .then(data => {
        console.log(data)
        if (data) {

            // hash Pasword check
            bcrypt.compare(req.body.password, data.password, function (err, result) {
                if (result == true) { res.json(data) }
                else { res.json('Password not correct try again !') }
            })
        }
        else { res.json('User not found, check the email again !') }
    })
    .catch(err => res.status(400).json('Error: ' + err));
}