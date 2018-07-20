var express = require('express');
var bodyParser = require('body-parser');
var Library = require('../Models/Library');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// CREATES A NEW BOOK IN LIBRARY


router.post('/', function (req, res) {
  Library.create({
      title : req.body.title,
      author : req.body.author,
      pubDate : Date.now(),
      numPages : req.body.numPages,
      cover : req.body.cover
    },
    function (err, book) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(book);
    });
});

// RETURNS ALL BOOKS IN THE DATABASE
router.get('/', function (req, res) {
 console.log('hit');
 Library.find({}, function (err, books) {
     if (err) return res.status(500).send("There was a problem finding books in library.");
     res.status(200).send(books);
 });
});

// DELETS ALL BOOKS IN THE DATABASE
 router.delete('/:id', function (req, res) {
 console.log('hit');
 Library.findByIDandRemove(req.params.id, function (err, books) {
     if (err) return res.status(500).send("There was a problem finding books in library.");
     res.status(200).send(books);
 });
});

module.exports = router;
