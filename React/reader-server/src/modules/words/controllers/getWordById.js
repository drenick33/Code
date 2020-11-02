const getWordById = (req, res) => {
  res.status(200).json({
    message: 'Get Word by ID Works!!',
  });
};

module.exports = getWordById;
