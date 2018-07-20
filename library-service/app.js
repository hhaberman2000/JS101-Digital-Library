
var express = require('express');
var app = express();
var cors = require('cors');
var LibraryController = require('./controllers/librarycontroller');
var db = require('./db');

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors());

//Include Controller Routes
app.use('/Library', LibraryController);

module.exports = app;
