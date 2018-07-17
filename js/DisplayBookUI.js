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
  var x = $(e.currentTarget).children().siblings()[0].innerHTML;
    console.log(x[0]);
    var bookShow = new Object();
    for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === x) {
      this._index = i;
      console.log(window.bookShelf[i].Title);
      bookShow = window.bookShelf[i];
      console.log(i);
      i=window.bookShelf.length;
      }
    };
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createBookDisplay(bookShow));
  return false;
  };

DisplayBookUI.prototype._createBookDisplay = function (bookShow) {
 $('#bookSuggTitle').html(book.Title +" by "+book.Author);
 $('#numOfpages').html(book.Pages + " pages");
 $('#datePub').html("Published: " + book.Published);
 $('#rating').html(book.Rating);
 $('#bookSynop').html(book.Synopsis);


};

$(function(){
  window.gDisplayBookUI = new DisplayBookUI($('#show-book-suggestion-modal'));
  window.gDisplayBookUI.init();
});
