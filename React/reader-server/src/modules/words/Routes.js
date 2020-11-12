const express = require('express');
const router = express.Router();
const getAllWords = require('./controllers/getAllWords');
const getWordById = require('./controllers/getWordById');
const searchWords = require('./controllers/searchWords');
const deleteWordById = require('./controllers/deleteWordById');
const addWord = require('./controllers/addWord');

//These routes start at /words/

//Get Methods
router.get('/', getAllWords);

router.get('/:id', getWordById);

//Post methods
router.post('/search', searchWords);

//Patch methods
router.patch('/', addWord);

//Delete methods
router.delete('/:id', deleteWordById);

module.exports = router;
