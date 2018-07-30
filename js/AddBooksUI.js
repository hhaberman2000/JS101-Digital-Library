var AddBooksUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = container;
  this.encFile;
};

AddBooksUI.prototype = Object.create(Library.prototype);

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
  var file_name = file.name;
  $("#fileName").val(file_name);
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
  var queueAlert = 1;
  $.each(queueBook, function(i, objProp) {
    bookObj[objProp.name] = objProp.value;
    });
  var book = new Book(bookObj);

  book.Cover = this.encFile;

  for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title === book.Title) {
       alert("The book " + book.Title + " has already been added. Please try another Title.");
       queueAlert = 0;
     }
   };

  if (queueAlert === 1) {
    this._tempBookShelf.push(book);
  };

  if (this._tempBookShelf.length > 0) {
    alert("The book " + book.Title + " has been added to the queue.");
    $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");
  } else {
    $('#books-in-queue').html(this._tempBookShelf.length + " book(s) to add");
  }
  $("#formentry")[0].reset();
  return true;
};

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
