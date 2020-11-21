const User = require('../userModel');

const deleteUserById = (req, res) => {
  const _id = req.params.userId;
  User.deleteOne({ _id: _id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: 'User delete by Id Failed', error: error });
    });
};

module.exports = deleteUserById;
