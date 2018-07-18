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
    console.log(bookTitle);
    var book = new Object();
    for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === bookTitle) {
        this._index = i;
        book = window.bookShelf[i];
        i=window.bookShelf.length;
      }
    };
    this.$container.modal('show');
    console.log(book);
    this._createBookDisplayModal(book);
  return false;
  };

DisplayBookFromModuleUI.prototype._createBookDisplayModal = function (book) {
 $('#showAllBookImg').html("<img src="+book.Cover+" style='width: 80%''>")
 $('#displayBookTitle').html(book.Title +" by "+book.Author);
 $('#showNumOfpages').html(book.Pages + " pages");
 $('#showDatePub').html("Published: " + book.Published.getFullYear());
 $('#showRating').html(book.Rating);
 $('#showBookSynop').html(book.Synopsis);
};

$(function(){
  window.gDisplayBookFromModuleUI = new DisplayBookFromModuleUI($('#display-book-modal'));
  window.gDisplayBookFromModuleUI.init();
});
