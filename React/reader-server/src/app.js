//Set up express server
const express = require('express');
const app = express();

//Set up morgan middleware
const morgan = require('morgan'); //Middleware that adds logs
app.use(morgan('dev'));

//Routes
const wordsRoutes = require('./modules/words/Routes');

app.use('/words', wordsRoutes);

//Error handling for when a route isn't found
app.use((req, res, next) => {
  const error = new Error('Route Not Found');
  error.status = 404;
  next(error);
});

//Returns an error for anything that doesn't work
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

module.exports = app;
