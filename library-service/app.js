
var express = require('express');
var app = express();
var cors = require('cors');
var LibraryController = require('./controllers/librarycontroller');
var db = require('./db');

app.use(cors());

app.use('/Library', LibraryController);

module.exports = app;
