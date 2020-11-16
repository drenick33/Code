const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  date: Date,
  text: String,
  author: String,
  level: String,
  image: String,
});

module.exports = mongoose.model('Story', StorySchema);
