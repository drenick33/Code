const mongoose = require('mongoose');
const Story = require('../storyModel');

const addStory = (req, res) => {
  const story = new Story({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    date: Date.now(),
    text: req.body.text,
    author: req.body.author,
    level: req.body.level,
    image: req.body.image,
  });
  story
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Story Added!',
        story: story,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Add Story Failed',
        error: error,
      });
    });
};

module.exports = addStory;
