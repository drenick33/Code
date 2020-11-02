const Todo = require('../../models/todo');
const mongoose = require('mongoose');

const todosDelete = (req, res) => {
  const id = req.params.ToDoID;
  Todo.deleteOne({ _id: id })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
};

export default todosDelete;
