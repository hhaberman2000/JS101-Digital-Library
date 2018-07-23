var AddBooksUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = container;
  this.encFile;
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
  this.$container.on('change', ':file',$.proxy(this._handleBookCover, this));
};

AddBooksUI.prototype._handleBookCover = function () {
  var preview = document.querySelector('#img-upload');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var _self = this;

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    _self.encFile = reader.result;
  }, false);

  if (file) {
   reader.readAsDataURL(file);
  }
};

AddBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};


AddBooksUI.prototype._handleQueueBooks = function (e) {
  var bookObj = new Object();
  var queueBook = this.$container.find("#formentry").serializeArray();
  $.each(queueBook, function(i, objProp) {
    bookObj[objProp.name] = objProp.value;
      });

  var book = new Book(bookObj);

  // for ( var i=0; i < window.bookShelf.length; i++) {
  //   if (window.bookShelf[i].Title === book.Title) {
  //     alert("Book title has already been added.");
  //     return this.hasBooks;
  //     }
  //   };

  book.Cover = this.encFile;
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

// AddBooksUI.prototype._handleAddBooksLib = function() {
//     console.log(this._tempBookShelf);
//     // let formData = this._tempBookShelf;
//     // console.log(formData);
//     $.ajax({
//       url: window.libraryURL,
//       dataType: 'json',
//       method: 'POST',
//       data: this._tempBookShelf,
//       success: (data) => {
//       console.log(data);
//       }
//     });
//   };

AddBooksUI.prototype._handleAddBooksLib = function () {
  var tempArr = this._tempBookShelf;
  this._tempBookShelf = [];
  $('#books-in-queue').html("0 book(s) to add");
  return this.addBooks(tempArr);
};

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#add-books-modal'));
  window.gAddBooksUI.init();
});
