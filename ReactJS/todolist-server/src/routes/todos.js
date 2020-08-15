const express = require('express');
const router = express.Router();

const { default: todosGet } = require('../controllers/todos/todosGet');
const { default: todosCreate } = require('../controllers/todos/todosCreate');
const { default: todosGetOne } = require('../controllers/todos/todosGetOne');
const { default: todosPatch } = require('../controllers/todos/todosPatch');
const { default: todosDelete } = require('../controllers/todos/todosDelete');

router.get('/', todosGet);
router.post('/', todosCreate);
router.get('/:ToDoID', todosGetOne);
router.patch('/:ToDoID', todosPatch);
router.delete('/:ToDoID', todosDelete);

module.exports = router;
