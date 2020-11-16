const addWord = (req, res) => {
  const word = {
    word: req.body.word,
    trans: req.body.trans,
    date: Date.now,
    _id: Math.random(),
    story: Math.random(),
  };

  res.status(201).json({
    message: 'Add Word Works!!',
    createdWord: word,
  });
};

module.exports = addWord;
