var EditBookUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = $(container);
};

EditBookUI.prototype = Object.create(Library.prototype);
//importing from Library

EditBookUI.prototype.init = function() {
  this._bindEvents();
};

EditBookUI.prototype._bindEvents = function () {
  $('.editBtn').on('click', $.proxy(this._handleModalOpen, this));
  $('#submit-edit-button').on('click', $.proxy(this._handleEditBooksLib, this));
};

EditBookUI.prototype._handleModalOpen = function () {
  console.log("open modal");
  this.$container.modal('show');
};


EditBookUI.prototype._handleEditBooks = function () {

  var Title = $(".bookToEdit").val();
  var author = $(".authorToEdit").val();
  var Pages = $(".pagesToEdit").val();
  var Published = $(".publishedToEdit").val();
  var Rating = $(".ratingToEdit").val();
  var Synopsis = $(".synopsisToEdit").val();
  var new_row
    // this.hasBooks = true;
    // for (var i= 0; i < window.bookShelf.length; i++) {

    var bookObj = new Object();
    var queueBook = this.$container.find("#formEntryEdit").serializeArray();
    console.log(queueBook);
      $.each(queueBook, function(i, objProp) {
          bookObj[objProp.name] = objProp.value;
          console.log(bookObj);
      });

      var book = new Book(bookObj);

    console.log(book);


    for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title === book.Title) {
       alert("Book title has already been added.");
       return this.hasBooks;
       }
     }
     this._tempBookShelf.push(book);
     // console.log(this._tempBookShelf);
     //alert("The book " + Title + " has been added to the queue.");
     if (this._tempBookShelf.length > 0) {
       $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");
       console.log(this._tempBookShelf);
     } else {
       $('#books-in-queue').html(this._tempBookShelf.length);
     }

     //return this.hasBooks=true;

};


EditBookUI.prototype._handleAddBooksLib = function () {
return this.addBooks(this._tempBookShelf);
};


// EditBookUI.prototype._addBooksLib = function( ) {
//   //sdd books to queue
// }

$(function(){
  window.gEditBookUI = new EditBookUI($('#edit-books-modal'));
  window.gEditBookUI.init();
});
