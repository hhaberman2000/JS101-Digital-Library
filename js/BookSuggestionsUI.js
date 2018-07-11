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
  var book = this.getRandomBook();
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createBookSugg(book));
  } else {
    alert('Nothing in library!');
  }
  return false;
  };

BookSuggestionsUI.prototype._createBookSugg = function (book) {
 var ul = document.createElement("ul");
 for (var i = 0; i < arrayAuthors.length; i++) {
   var li = document.createElement("li");
   $(li).text(arrayAuthors[i]);
   ul.append(li);
 }
 return ul;
};

$(function(){
  window.gBookSuggestionsUI = new BookSuggestionsUI($('#show-book-suggestion-modal'));
  window.gBookSuggestionsUI.init();
});
