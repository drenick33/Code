const Board = require('../../models/board');
const mongoose = require('mongoose');

const boardGetOne = (req, res) => {
  const id = req.params.BoardID; //Constant that stores the ToDoID accessed
  Board.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc); //If this runs, the GET works
      } else {
        res.status(404).json({ message: 'ID not found' }); //If there's no error, but ID isn't found
      }
    })
    .catch((err) => {
      //If the code fails
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export default boardGetOne;
