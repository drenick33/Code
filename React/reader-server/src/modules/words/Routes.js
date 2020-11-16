const express = require('express');
const router = express.Router();
const getAllWords = require('./controllers/getAllWords');
const getWordById = require('./controllers/getWordById');
const searchWords = require('./controllers/searchWords');
const deleteWordById = require('./controllers/deleteWordById');
const addWord = require('./controllers/addWord');
const createWordList = require('./controllers/createWordList');

//These routes start at /words/

//Get Methods
router.get('/', getAllWords);

router.get('/:_id', getWordById);

//Post methods
router.post('/', createWordList);
router.post('/search', searchWords);

//Patch methods
router.patch('/', addWord); //Patch since we'll be adding to an array

//Delete methods
router.delete('/:_id', deleteWordById);

module.exports = router;
