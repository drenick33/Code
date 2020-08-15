const Board = require('../../models/board');

const mongoose = require('mongoose');

const boardCreate = (req, res, next) => {
  const board = new Board({
    _id: new mongoose.Types.ObjectId(), //Create new unique object id
    title: req.body.title,
    todos: [],
  });
  board
    .save() //Stores in database
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'board POST works!',
        createdProduct: {
          title: result.title,
          _id: result._id,
          todos: result.todos,
          request: {
            type: 'Post',
            url: 'http://localhost:6001/boards/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    }); //catch errors
};

export default boardCreate;
