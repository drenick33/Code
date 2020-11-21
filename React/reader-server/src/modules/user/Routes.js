const express = require('express');
const router = express.Router();
const registerUser = require('./controllers/registerUser');
const deleteUserById = require('./controllers/deleteUserById');
const loginUser = require('./controllers/loginUser');
//These routes start at /Stories/

// //Get Methods
// router.get('/', getAllStories);
// router.get('/:storyId', getStoryById);

// //Post methods
// router.post('/search', searchStories);
router.post('/register', registerUser);
router.post('/login', loginUser);

// //Patch methods
// router.patch('/:storyId', editStory);

//Delete methods
router.delete('/:userId', deleteUserById);

module.exports = router;
