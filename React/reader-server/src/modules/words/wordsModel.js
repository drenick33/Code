const mongoose = require('mongoose');

const wordsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  listName: String,
  words: Array,
});

module.exports = mongoose.model('Words', wordsSchema);
