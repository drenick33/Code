const addWord = (req, res) => {
  res.status(201).json({
    message: 'Add Word Works!!',
  });
};

module.exports = addWord;
