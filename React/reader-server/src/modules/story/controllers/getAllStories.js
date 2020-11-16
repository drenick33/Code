const Story = require('../storyModel');

const getAllStories = (req, res) => {
  Story.find()
    .exec()
    .then((doc) => {
      if (doc.length > 0) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'There are no Stories :(' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Get All Stories Failed', error: error });
    });
};

module.exports = getAllStories;
