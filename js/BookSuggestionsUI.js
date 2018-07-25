var BookSuggestionsUI = function(container) {
  this.$container = container;
  Library.call(this);
};

BookSuggestionsUI.prototype = Object.create(Library.prototype);

BookSuggestionsUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

BookSuggestionsUI.prototype._bindEvents = function () {
  $('#bookSugg-btn').on('click', $.proxy(this._handleBookSugg, this));

  return false;
};

BookSuggestionsUI.prototype._handleBookSugg = function () {
    book = this.getRandomBook();
    console.log(book._id);
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createBookSugg(book));
  return false;
  };

BookSuggestionsUI.prototype._createBookSugg = function (book) {
  console.log(book.Published);
  var pubDate = new Date(book.Published);
  console.log(pubDate);
 $('#book-sugg-img').html("<img src="+ book.Cover+" style='width: 80%''>")
 $('#bookSuggTitle').html(book.Title +" by "+ book.Author);
 $('#numOfpages').html(book.Pages + " pages");
 $('#datePub').html("Published: " + pubDate.getFullYear());
 $('#rating').html(book.Rating);
 $('#bookSynop').html(book.Synopsis);
};

$(function(){
  window.gBookSuggestionsUI = new BookSuggestionsUI($('#show-book-suggestion-modal'));
  window.gBookSuggestionsUI.init();
});
