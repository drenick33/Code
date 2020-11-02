const getAllWords = (req, res) => {
  res.status(200).json({
    message: 'Get All Words Works!!',
  });
};

module.exports = getAllWords;
