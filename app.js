const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const mongoConnectionString = 'mongodb+srv://demoUser:47tsgGuo0VmWwjzV@cluster0-fn7h1.mongodb.net/openclassroomdemo?retryWrites=true&w=majority';

mongoose.connect(mongoConnectionString)
  .then(() => {
    console.log('Connected to Atlas successfully');
  })
  .catch((error) => {
    console.log('An error occured while connecting to MongoDB Atlas');
    console.log(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth',  userRoutes);

module.exports = app;
