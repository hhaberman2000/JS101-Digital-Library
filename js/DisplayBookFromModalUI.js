var DisplayBookFromModuleUI = function(container) {
  this.$container = container;
  Library.call(this);
};

DisplayBookFromModuleUI.prototype = Object.create(Library.prototype);

DisplayBookFromModuleUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

DisplayBookFromModuleUI.prototype._bindEvents = function () {
  $('.modal-body').on('click', '.selectBookUl', $.proxy(this._handleDisplayBook, this));
  return false;
};

DisplayBookFromModuleUI.prototype._handleDisplayBook = function (e) {
  var bookTitle = e.currentTarget.innerHTML;
  var book = new Object();
  for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === bookTitle) {
      this._index = i;
      book = window.bookShelf[i];
      i=window.bookShelf.length;
    }
  };
  this.$container.modal('show');
  this._createBookDisplayModal(book);
  return false;
  };

DisplayBookFromModuleUI.prototype._createBookDisplayModal = function (book) {
  var datePub = new Date(book.Published);
  $('#showAllBookImg').html("<img src="+book.Cover+" style='width: 80%''>")
  $('#displayBookTitle').html(book.Title +" by "+book.Author);
  $('#showNumOfpages').html(book.Pages + " pages");
  $('#showDatePub').html("Published: " + datePub.getFullYear());
  $('#showRating').html(book.Rating);
  $('#showBookSynop').html(book.Synopsis);
};

$(function(){
  window.gDisplayBookFromModuleUI = new DisplayBookFromModuleUI($('#display-book-modal'));
  window.gDisplayBookFromModuleUI.init();
});
