const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.EmailAPI);
const User = require('../models/User');

// Send Email Contact form
exports.contactForm = (req, res) => {
    req.body.dateFormat = new Date()

    console.log('******************************************');
    console.log('contactSendEmail', req.body);
   //  req.body ={ req.body.name, req.body.email, req.body.subject, req.body.message, req.body.dateFormat }

    const msg = {
        to: 'adelhanifh@gmail.com',
        from: 'adelhanifh@gmail.com',
        subject: req.body.subject + ' | ' + req.body.name,
        html: `
            <div>
                <h1>Welcome to On Target</h1>
                <h2>Hi I am ${req.body.name},</h2>
                <h2>I send to you this E-mail because:</h2>
                <div style="font-weight: 600; text-align: justify;">${req.body.message}</div>
                <h2>Please reply to my message as soon as possible.</h2>
                <h3>My email is: ${req.body.email}</h3>
                <h4>Thank you</h4>
                <p>This email was sent at ${req.body.dateFormat}</p>
            </div>`
    }
    
    sgMail.send(msg, (err, info) => {
        if (err) {
            console.log('Email not Sent', err)
            res.send('Email not Sent', err)
        } else {
            console.log('Your message has been sent. Thank you!')
            res.send('Your message has been sent. Thank you!')
        }
    })
}

// Send Email reset password
exports.resetPassword = (req, res) => {
    req.body.dateFormat = new Date()

    console.log('******************************************');
    console.log('reset Password', req.body);

    User.findOne({ email: req.body.email }, (err, data) => {
        if (data == null) {
            res.send('No account matches this email: ' + req.body.email);
        }
        else {
            const msg = {
                to: 'adelhanifh@gmail.com',
                from: 'adelhanifh@gmail.com',
                subject: 'Reset your Password | ' + data.firstName + ' ' + data.lastName,
                html: `
                <div>                
                    <h1>Welcome to On Target</h1>
                    <h2>Hello ${data.firstName} ${data.lastName}</h2>
                    <h2>Please click below to rest the Password</h2>
                    <div>
                        <a href="http://localhost:3000/user/reset/${user.id}" type="button">reset your password now</a>
                    </div>
                    <h3>If you still have problem <a href="http://localhost:3000">contact us</a> </h3>
                    <h4>Thank you</h4>
                    <p>This email was sent at ${req.body.dateFormat}</p>
                </div>`
            }
            console.log('msg', msg);
            sgMail.send(msg, (err, info) => {
                if (err) {
                    console.log('Email not Sent', err)
                    res.send('Email not Sent', err)
                } else {
                    console.log('Your message has been sent. Thank you!')
                    res.send('Reset Password email has been sent to you. Thank you!')
                }
            })
        }
    })
}