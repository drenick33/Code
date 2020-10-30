const express = require('express');
const app = express();

const wordsRoutes = require('./modules/words/Routes');

app.use('/words', wordsRoutes);

module.exports = app;
