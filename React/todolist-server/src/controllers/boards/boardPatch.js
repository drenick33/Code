const Board = require('../../models/board');
const mongoose = require('mongoose');

const boardPatch = (req, res) => {
  const id = req.params.BoardID;
  Board.update(
    { _id: id },
    {
      $set: req.body,
    }
  )
    .exec()
    .then((result) => {
      console.log(result), res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export default boardPatch;
