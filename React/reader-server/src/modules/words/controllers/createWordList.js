const addWord = (req, res) => {
  res.status(201).json({
    message: 'created new list',
  });
};

module.exports = addWord;
