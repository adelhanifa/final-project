const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EmailAPI);
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Goal = require("../models/Goal");
const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.TOKEN_SECRET;

// get all users
exports.findAllUsers = (req, res) => {
  User.find()
    .then((users) =>
      res.send({ status: "all users found", user: users, err: null })
    )
    .catch((err) => {
      console.log(err);
      res.send({ status: "all users  not found", user: null, err: err });
    });
};

//create a new user with send email
exports.createNewUser = (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);
  req.body.profileImg = "/img/users" + req.file.filename;

  console.log("******************************************");

  // hash Pasword
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) throw err;
    console.log("hash Pass:", hash);
    req.body.password = hash;
    console.log("create user: ", req.body);

    const newUser = new User(req.body);
    newUser
      .save()
      .then((user) => {
        let date = new Date();

        const msg = {
          to: "ontarget.yourplatform@gmail.com",
          from: "ontarget.yourplatform@gmail.com",
          subject:
            user.firstName + " " + user.lastName + " | confirm email address",
          html: `
                <div>                
                    <h1>Welcome to On Target</h1>
                    <h2>Hello ${user.firstName} ${user.lastName}</h2>
                    <h2>Thank you for registering on our website</h2>
                    <h2>Please confirm your account by clicking on the button below</h2>
                    <div>
                        <a href="http://localhost:3000/user/confirm/${user.id}" type="button">confirm your email now</a>
                    </div>
                    <h3>If you still have problem <a href="http://localhost:3000">contact us</a> </h3>
                    <h4>Thank you</h4>
                    <p>This email was sent at ${date}</p>
                </div>`,
        };
        sgMail.send(msg, (err, info) => {
          if (err) {
            console.log("Email not Sent", err);
            res.send({
              status: "new user created but Email not Sent",
              user: user,
              err: err,
            });
          } else {
            console.log("Your message has been sent. Thank you!");
            res.send({
              status: "new user created and confirm email has been sent to you",
              user: user,
              err: err,
            });
          }
        });
      })
      .catch((err) => {
        res.send({ status: "err", user: null, err: err });
        console.log(err);
      });
  });
};

//user loged in
exports.loginUser = (req, res) => {
  console.log("******************************************");
  console.log("log in user: ", req.body);

  User.findOne({ email: req.body.email })
    .populate("goals")
    .then((data) => {
      console.log(data);
      if (data) {
        // hash Pasword check
        bcrypt.compare(
          req.body.password,
          data.password,
          function (err, result) {
            if (result == true) {
              if (data.activated) {
                //create token part
                const payload = {
                  id: data._id,
                };
                const token = jwt.sign(payload, accessTokenSecret, {
                  expiresIn: "1h",
                });
                req.session.token = token;
                req.session.user = data;
                req.session.isLogedIN = true;
                res.send({
                  isLogedIN: req.session.isLogedIN,
                  user: req.session.user,
                  err: err,
                });
              } else {
                res.send({
                  isLogedIN: req.session.isLogedIN,
                  user: req.session.user,
                  err: "Please verify your email address before login !",
                });
              }
            } else {
              res.send({
                isLogedIN: req.session.isLogedIN,
                user: req.session.user,
                err: "Password not correct try again !",
              });
            }
          }
        );
      } else {
        res.send({
          isLogedIN: req.session.isLogedIN,
          user: req.session.user,
          err: "User not found, check the email again, or try to sign up !",
        });
      }
    })
    .catch((err) =>
      res.send({
        isLogedIN: req.session.isLogedIN,
        user: req.session.user,
        err: err,
      })
    );
};

//google log in
exports.googleLogIn = (req, res) => {
  User.findOne({ googleID: req.body.googleID })
    .populate("goals")
    .then((user) => {
      if (user) {
        //If User already exists login / return User Data

        //create token part
        const payload = {
          id: user._id,
        };
        const token = jwt.sign(payload, accessTokenSecret, { expiresIn: "1h" });
        req.session.token = token;
        req.session.user = user;
        req.session.isLogedIN = true;

        res.send({
          isLogedIN: req.session.isLogedIN,
          user: req.session.user,
          err: null,
        });
      } else {
        //create a new User and login / return UserDB._id
        req.body.activated = true;
        user = new User(req.body);
        user.save(function (err, data) {
          if (err) {
            res.send({
              isLogedIN: req.session.isLogedIN,
              user: req.session.user,
              err: err,
            });
          } else {
            console.log("saving user ...", data);
            //create token part
            const payload = {
              id: user._id,
            };
            const token = jwt.sign(payload, accessTokenSecret, {
              expiresIn: "1h",
            });
            req.session.token = token;
            req.session.user = user;
            req.session.isLogedIN = true;

            res.send({
              isLogedIN: req.session.isLogedIN,
              user: req.session.user,
              err: err,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({
        isLogedIN: req.session.isLogedIN,
        user: req.session.user,
        err: err,
      });
    });
};

// user log out
exports.logoutUser = (req, res) => {
  req.session.token = null;
  req.session.user = null;
  req.session.isLogedIN = false;
  res.send({ isLogedIN: req.session.isLogedIN });
};

// add user goals
exports.addGoalsForm = (req, res) => {
  console.log({ fromUser: req.body.goals });
  let goals = req.body.goals;
  let upadateUser = [];
  User.findById(req.params.id)
    .then((data) => {
      console.log({ fromDB: data.goals });
      upadateUser = goals.filter((x) => data.goals.indexOf(x) === -1);
      upadateUser = [...data.goals, ...upadateUser];
    })
    .then(() => {
      console.log({ fromDBandUser: upadateUser });
      User.findByIdAndUpdate(req.params.id, { goals: upadateUser })
        .then(() => {
          User.findById(req.params.id).populate("goals")
            .then((user) => {
              res.send({ status: "Your goals are added", user: user, err: null, });
            })
            .catch((err) => {
              console.log(err);
              res.send({ status: "goals not added something wrong", user: null, err: err, });
            });
        })
        .catch((err) => {
          console.log(err);
          res.send({ status: "goals not added something wrong", user: null, err: err, });
        });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "goals not added something wrong", user: null, err: err, });
    });
  //   User.findById(req.params.id)
  //     .then((user) => {
  //       console.log({ user });
  //       if (user.goals.length === 0) {
  //         User.findByIdAndUpdate(req.params.id, req.body)
  //           .populate("goals")
  //           .then((user) => {
  //               updateUser = user;
  //             // res.send({ status: "all goals added", user: user, err: null });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             res.send({ err: err });
  //           });
  //       } else {
  //         goals.map((el1) => {
  //           user.goals.map((el2) => {
  //             if (el2 !== el1) {
  //               console.log({ el2, el1 });
  //               User.findByIdAndUpdate(req.params.id, req.body)
  //                 .then((user) => {
  //                  console.log({user})
  //                   upadateUser = user;

  //                   //    res.send({ status: 'all goals added', user: user, err: null })
  //                 })
  //                 .catch((err) => {
  //                   console.log(err);
  //                   res.send({ err: err });
  //                 });
  //             }
  //           });
  //         });

  //       }
  //     })
  //     .then(user => {
  //         console.log({user})
  //         console.log({ upadateUser });
  //         res.send({ status: "all goals added", user: upadateUser, err: null });
  //     })
  //     .catch((err) => console.log({ err }));

  //   console.log({ goals: req.body.goals, type: typeof req.body });
  //   let goals = req.body.goals;

  //   User.findById(req.params.id)
  //     .then((user) => {
  //       console.log({ user });
  //       if (user.goals.length === 0) {
  //         User.findByIdAndUpdate(req.params.id, req.body)
  //           .populate("goals")
  //           .then((user) => {
  //             return user;
  //             // res.send({ status: "all goals added", user: user, err: null });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             res.send({ err: err });
  //           });
  //       } else {
  //         goals.map((el1) => {
  //           user.goals.map((el2) => {
  //             if (el1 !== el2) {
  //               user.goals.push(el1);
  //             }

  //             // if (el2 !== el1) {
  //             //   console.log({ el2, el1 });
  //             //   User.findByIdAndUpdate(req.params.id, req.body)
  //             //     .then((user) => {
  //             //          return user;
  //             //     //   res.send({
  //             //     //     status: "all goals added",
  //             //     //     user: user,
  //             //     //     err: null,
  //             //     //   });
  //             //     })
  //             //     .catch((err) => {
  //             //       console.log(err);
  //             //       res.send(err).status(404);
  //             //     });
  //             // } else res.send(null).status(404);
  //           });
  //         });
  //         User.findByIdAndUpdate(req.params.id, { goals: user.goals })
  //           .populate("goals")
  //           .then((user) => {
  //             res.send({ status: "all goals added", user: user, err: null });
  //           });
  //       }
  //     })
  //     .catch((err) => console.log({ err }));
};

//check user logIn
exports.checkLogInUser = (req, res) => {
  if (req.session.isLogedIN || req.session.user)
    res.send({ isLogedIN: req.session.isLogedIN, user: req.session.user });
  else res.send({ isLogedIN: false, user: null });
};

// checkEmailUsed
exports.checkEmailUsed = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((user) => {
      if (user) res.send(true);
      else res.send(false);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err: err });
    });
};

// confirm Email address
exports.confirmUserEmail = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { activated: true })
    .then((user) => {
      res.send({
        status: "Your email address is successfully activated, log in now",
        user: user,
        err: null,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: "Something wrong try again or cuntact us !",
        err: err,
      });
    });
};

// reset Password
exports.resetUserPassword = (req, res) => {
  console.log("******************************************");
  // hash Pasword
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) throw err;
    console.log("hash Pass:", hash);
    req.body.password = hash;
    console.log("reset user password: ", req.body);

    User.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => {
        res.send({
          status: "You have successfully changed the password, log in now.",
          err: null,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send({
          status: "Something wrong try again or cuntact us !",
          err: err,
        });
      });
  });
};
