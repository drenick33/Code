const Todo = require('../../models/todo');
const mongoose = require('mongoose');

const todosGetOne = (req, res) => {
  const id = req.params.ToDoID; //Constant that stores the ToDoID accessed
  Todo.findById(id)
    .exec()
    .then((doc) => {
      console.log('From database', doc);
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

export default todosGetOne;
