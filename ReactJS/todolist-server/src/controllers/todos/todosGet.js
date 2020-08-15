const Todo = require('../../models/todo');
const mongoose = require('mongoose');

const todosGet = (req, res) => {
  Todo.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
};

export default todosGet;
