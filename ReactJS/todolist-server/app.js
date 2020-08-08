//nodemon used for hotreloading on file change

const express = require('express');
const app = express();
const morgan = require('morgan'); //Debug tool in terminal, logs
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //for MongoDB

const todoRoutes = require('./api/routes/todos');

app.use(morgan('dev')); //logs
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//MongoDB, password stored in nodemon.json, so we don't have to hardcode here
mongoose.connect(
  'mongodb+srv://dan:' +
    process.env.MONGO_ATLAS_PW +
    '@todo.wpxbg.mongodb.net/<todos>?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//mongoose.Promise = global.Promise;

//Handle CORS () errors and allow any origin
//You can select a certain place to give access (http://###)
//Allow access to all since it's restless API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  next(); //stops from freezing
  if (req.method === 'OPTIONS') {
    //Just to find out what options we have
    res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //All requests for HTTP with your api
    return res.status(200).json({}); //Empty Json.
  }
});

app.use('/todos', todoRoutes);

app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
