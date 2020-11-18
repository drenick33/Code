const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: String,
  date: Date,
  text: { type: String, required: true },
  author: { type: String, required: true },
  level: {
    type: String,
    enum: [
      'Beginer',
      'Elementary',
      'Intermediate',
      'Upper Intermediate',
      'Expert',
      'Master',
    ],
    default: 'Intermediate',
  },
  image: String,
});

module.exports = mongoose.model('Story', StorySchema);
