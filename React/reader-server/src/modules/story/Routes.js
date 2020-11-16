const express = require('express');
const router = express.Router();
const getAllStories = require('./controllers/getAllStories');
const getStoryById = require('./controllers/getStoryById');
const searchStories = require('./controllers/searchStories');
const deleteStoryById = require('./controllers/deleteStoryById');
const addStory = require('./controllers/addStory');
const editStory = require('./controllers/editStory');

//These routes start at /Stories/

//Get Methods
router.get('/', getAllStories);
router.get('/:storyId', getStoryById);

//Post methods
router.post('/search', searchStories);
router.post('/', addStory);

//Patch methods
router.patch('/:storyId', editStory);

//Delete methods
router.delete('/:storyId', deleteStoryById);

module.exports = router;
