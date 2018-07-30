var mongoose = require('mongoose');
var LibrarySchema = new mongoose.Schema({
  Cover: String,
  Title: String,
  Author: String,
  Pages: Number,
  Published: Date,
  Rating: String,
  Synopsis: String,
});
mongoose.model('Library', LibrarySchema);

module.exports = mongoose.model('Library');
