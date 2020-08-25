const mongoose = require('mongoose'); //for MongoDB

const boardSchema = mongoose.Schema({
  //Create a schema for MongoDB
  _id: mongoose.Schema.Types.ObjectId, //Create ID for object
  title: { type: String, require: true },

  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ToDo',
      required: false,
    },
  ],
});

//What module to use and export. 1st argument is internal name
//2nd argument in the schema used (for constructor?)
module.exports = mongoose.model('Board', boardSchema);
