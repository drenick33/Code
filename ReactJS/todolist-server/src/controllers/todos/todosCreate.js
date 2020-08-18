const Todo = require('../../models/todo');
const mongoose = require('mongoose');

const todosCreate = (req, res, next) => {
  const todo = new Todo({
    _id: new mongoose.Types.ObjectId(), //Create new unique object id
    title: req.body.title,
    done: false,
    board: req.body.board,
    status: 'todo',
    // productImage: req.file.path,
  });
  todo
    .save() //Stores in database
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'todo POST works!',
        createdProduct: {
          title: result.title,
          done: result.done,
          _id: result._id,
          board: result.board,
          status: 'todo',
          request: {
            type: 'Post',
            url: 'http://localhost:6001/todos/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    }); //catch errors
};

export default todosCreate;
