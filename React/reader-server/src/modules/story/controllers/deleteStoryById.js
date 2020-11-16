const Story = require('../storyModel');

const deleteStoryById = (req, res) => {
  const _id = req.params.storyId;
  Story.remove({ _id: _id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Story by Id Failed', error: error });
    });
};

module.exports = deleteStoryById;
