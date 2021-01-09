const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.EmailAPI);
const User = require('../models/User');
const bcrypt = require('bcrypt');

// get all users
exports.findAllUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new user with send email
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
        .then(user => {
            let date = new Date()

            const msg = {
                to: 'adelhanifh@gmail.com',
                from: 'adelhanifh@gmail.com',
                subject: user.firstName + ' ' + user.lastName + ' | confirm email address',
                html: `
                <div>                
                    <h1>Welcome to On Target</h1>
                    <h2>Hello ${user.firstName} ${user.lastName}</h2>
                    <h2>Thank you for registering on our website</h2>
                    <h2>Please confirm your account by clicking on the button below</h2>
                    <div>
                        <a href="http://localhost:3000/user/confirm/${user.id}" type="button">reset your password now</a>
                    </div>
                    <h3>If you still have problem <a href="http://localhost:3000">contact us</a> </h3>
                    <h4>Thank you</h4>
                    <p>This email was sent at ${date}</p>
                </div>`
            }
            console.log('msg', msg);
            sgMail.send(msg, (err, info) => {
                if (err) {
                    console.log('Email not Sent', err)
                    res.send({status: 'new user created but Email not Sent', userinfo: user, errMSG: err})
                } else {
                    console.log('Your message has been sent. Thank you!')
                    res.send({status: 'new user created and confirm email has been sent to you', userinfo: user, errMSG: err})
                }
            })
        })
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