var AddBooksUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);
//importing from Library

AddBooksUI.prototype.init = function() {
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('#addBooks-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#add-books-queue').on('click', $.proxy(this._handleQueueBooks, this));
  $('#add-books-button').on('click', $.proxy(this._handleAddBooksLib, this));
};


AddBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};


AddBooksUI.prototype._handleQueueBooks = function () {
  // e.preventDefault();
  var bookTitle = $("#book-title-add-book").val();
  var author = $("#add-book-author").val();
  var numberOfPages = $("#add-book-pages").val();
  var publishDate = $("#add-book-pub-date").val();

    var queueBook = new Book( {
    bookTitle : bookTitle,
    author : author,
    numberOfPages : numberOfPages,
    publishDate : new Date(publishDate),
    });

    console.log(queueBook);
    this.hasBooks = false;
    for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].bookTitle === queueBook.bookTitle) {
       alert("Book title has already been added.");
       return this.hasBooks;
       }
     }
     console.log(this._tempBookShelf.push(queueBook));
     alert("The book " + bookTitle + " has been added to the queue.");
     if (this._tempBookShelf.length > 0) {
       $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");
     } else {
       $('#books-in-queue').html(this._tempBookShelf.length);
     }

     //return this.hasBooks=true;

};


AddBooksUI.prototype._handleAddBooksLib = function () {
return this.addBooks(this._tempBookShelf);
};


// AddBooksUI.prototype._addBooksLib = function( ) {
//   //sdd books to queue
// }

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#add-books-modal'));
  window.gAddBooksUI.init();
});
