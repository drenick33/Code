const mongoose = require('mongoose');
const User = require('../userModel');
const bcrypt = require('bcrypt');

const registerUser = (req, res) => {
  User.find({ email: req.body.email }) //Check if email is already used
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).json({ message: 'Email already used' });
      } else {
        //Email isn't already used
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          //hash password, salt 10 times to prevent dictionary lookups
          if (error) {
            //If hash fails for some reason
            return res.status(500).json({ error: error });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              name: req.body.name,
              signupDate: Date.now(),
              level: req.body.level,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: 'Registered User!',
                  user: user,
                });
              })
              .catch((error) => {
                console.log(error);
                res.status(500).json({
                  message: 'Register User Failed',
                  error: error,
                });
              });
          }
        });
      }
    });
};

module.exports = registerUser;
