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

    var bookObj = new Object();
    var queueBook = this.$container.find("#formentry").serializeArray();
      $.each(queueBook, function(i, objProp) {
          bookObj[objProp.name] = objProp.value;  //bookObj['title'] = 'IT'
      });

    var book = new Book(bookObj);

    for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title === book.Title) {
       alert("Book title has already been added.");
       return this.hasBooks;
       }
     };

    this._tempBookShelf.push(book);
    alert("The book " + book.Title + " has been added to the queue.");

    if (this._tempBookShelf.length > 0) {
       $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");

    } else {
       $('#books-in-queue').html(this._tempBookShelf.length);
    }
     $("#formentry")[0].reset();

     return true;
   };

AddBooksUI.prototype._handleAddBooksLib = function () {
  var tempArr = this._tempBookShelf;
  this._tempBookShelf = [];
  $('#books-in-queue').html("0 book(s) to add");
  // console.log(tempArr);
  return this.addBooks(tempArr);
};


$(function(){
  window.gAddBooksUI = new AddBooksUI($('#add-books-modal'));
  window.gAddBooksUI.init();
});
