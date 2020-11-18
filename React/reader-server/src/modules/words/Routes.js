const express = require('express');
const router = express.Router();
const getAllWords = require('./controllers/getAllWords');
const getWordById = require('./controllers/getWordById');
const searchWords = require('./controllers/searchWords');
const deleteWordById = require('./controllers/deleteWordById');
const addWord = require('./controllers/addWord');
const createWordList = require('./controllers/createWordList');
const getAllWordLists = require('./controllers/getAllWordLists');

//These routes start at /words/

//Get Methods
router.get('/', getAllWords);
router.get('/list', getAllWordLists);
router.get('/:wordId', getWordById);
//router.get('/list/:_id, getWordListById)

//Post methods
router.post('/', addWord);
router.post('/list', createWordList);
router.post('/search', searchWords);

//Patch methods
//router.patch('/list/:listId', addWordToList); //Patch since we'll be adding to an array

//Delete methods
router.delete('/:_id', deleteWordById);

module.exports = router;
