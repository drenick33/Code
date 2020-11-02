const Board = require('../../models/board');
const mongoose = require('mongoose');

const boardGet = (req, res) => {
  Board.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
};

export default boardGet;
