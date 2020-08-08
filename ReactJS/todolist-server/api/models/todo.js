const mongoose = require('mongoose'); //for MongoDB

const todoSchema = mongoose.Schema({
  //Create a schema for MongoDB
  _id: mongoose.Schema.Types.ObjectId, //Create ID for object
  title: { type: String, require: true },
  done: { type: Number, require: true },
});

//What module to use and export. 1st argument is internal name
//2ns argument in the schema used (for constructor?)
module.exports = mongoose.model('ToDo', todoSchema);
