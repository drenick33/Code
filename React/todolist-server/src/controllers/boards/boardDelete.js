const Board = require('../../models/board');
const mongoose = require('mongoose');

const boardDelete = (req, res) => {
  const id = req.params.BoardID;
  Board.deleteOne({ _id: id })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
};

export default boardDelete;
