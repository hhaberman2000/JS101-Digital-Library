var DisplayBookUI = function(container) {
  this.$container = container;
  Library.call(this);
};

DisplayBookUI.prototype = Object.create(Library.prototype);

DisplayBookUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

DisplayBookUI.prototype._bindEvents = function () {
  $('table').on('click', '.selectBookRow', $.proxy(this._handleDisplayBook, this));
  return false;
};

DisplayBookUI.prototype._handleDisplayBook = function (e) {
  var x = $(e.currentTarget).children().siblings()[1].innerHTML;
    var book = new Object();
    for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === x) {
        this._index = i;
        book = window.bookShelf[i];
        i=window.bookShelf.length;
      }
    };
    this.$container.modal('show');
    this._createBookDisplay(book);
  return false;
  };

DisplayBookUI.prototype._createBookDisplay = function (book) {
 $('#showAllBookImg2').html("<img src="+book.Cover+" style='width: 80%''>")
 $('#displayBookTitle2').html(book.Title +" by "+book.Author);
 $('#showNumOfpages2').html(book.Pages + " pages");
 $('#showDatePub2').html("Published: " + book.Published.getFullYear());
 $('#showRating2').html(book.Rating);
 $('#showBookSynop2').html(book.Synopsis);
};

$(function(){
  window.gDisplayBookUI = new DisplayBookUI($('#display-book-tbl-modal'));
  window.gDisplayBookUI.init();
});
