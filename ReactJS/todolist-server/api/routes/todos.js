const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const ToDo = require('../models/todo'); //Get Mongo scheema (model) from other file
const todo = require('../models/todo');

router.get('/', (req, res, next) => {
  todo
    .find()
    .select('title done _id')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        todos: docs.map((doc) => {
          return {
            title: doc.title,
            done: doc.done,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:6001/todos/' + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })

    // if (docs.length >= 0){   Commented part for if there's no todos, return 404 error
    // }
    // else {
    //   res.status(404).json({message: "No Products"})
    // }
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
}); //doesn't need to be /todos, since you'll already be in /todos when accessing

//upload.single() - parse only one file; multer
router.post('/', (req, res, next) => {
  console.log(req.file); //from upload.single
  const todo = new ToDo({
    _id: new mongoose.Types.ObjectId(), //Create new unique object id
    title: req.body.title,
    done: req.body.done,
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
});

router.get('/:ToDoID', (req, res, next) => {
  const id = req.params.ToDoID; //Constant that stores the productID accessed
  ToDo.findById(id)
    .select('title done _id')
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
});

router.patch('/:ToDoID', (req, res, next) => {
  const id = req.params.ToDoID;
  // const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  todo
    .update(
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
});

/*
Example of a Patch request sent to /todos/[ToDoID]
Must be an array

[
    {
    "propName": "title", "value":  "Chocolate Cake"
    }
]
*/

router.delete('/:ToDoID', (req, res, next) => {
  const id = req.params.ToDoID;
  todo
    .deleteOne({ _id: id })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
});

module.exports = router;
