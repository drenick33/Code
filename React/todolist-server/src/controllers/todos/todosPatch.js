const Todo = require('../../models/todo');
const mongoose = require('mongoose');

const todosPatch = (req, res) => {
  const id = req.params.ToDoID;
  Todo.update(
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

export default todosPatch;

/*
Example of a Patch request sent to /todos/[ToDoID]
Must be an array

[
    {
    "propName": "title", "value":  "Chocolate Cake"
    }
]
*/
