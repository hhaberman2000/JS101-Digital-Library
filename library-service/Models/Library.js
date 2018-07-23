var mongoose = require('mongoose');
var LibrarySchema = new mongoose.Schema({
  Cover: String,
  Title: String,
  Author: String,
  Pages: Number,
  Published: Date,
  Synopsis: String,
});
mongoose.model('Library', LibrarySchema);

module.exports = mongoose.model('Library');


// Library.create({
//     Cover : req.body.Cover,
//     Title : req.body.Title,
//     Author : req.body.Author,
//     Pages : req.body.Pages,
//     Published : Date.now(),
//     Synopsis: req.body.Synopsis
