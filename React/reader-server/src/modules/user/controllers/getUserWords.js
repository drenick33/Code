const User = require('../userModel');

//Error Message always the same for security, attackers won't know if it failed since there's no email, or if the password is wrong

const getUserWords = (req, res) => {
  const userId = req.userData.userId;
  User.findOne({ _id: userId })
    .select('words')
    .populate({ path: 'words', select: 'word, trans' }) //Check if email is already used
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found', error });
      }
      return res.status(200).json({ message: 'User found', user });
    })
    .catch((error) => {
      return res.status(404).json({ message: 'User not found', error });
    });
};

module.exports = getUserWords;
