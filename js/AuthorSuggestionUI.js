var AuthorSuggestionsUI = function(container) {
  this.$container = container;
  Library.call(this);
};

AuthorSuggestionsUI.prototype = Object.create(Library.prototype);

AuthorSuggestionsUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

AuthorSuggestionsUI.prototype._bindEvents = function () {
  $('#bookSugg-btn').on('click', $.proxy(this._handleBookSugg, this));
  return false;
};

AuthorSuggestionsUI.prototype._handleBookSugg = function () {
  var book = this.getRandomBook();
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createBookSugg(book));
  return false;
  };

  $(function(){
    window.gAuthorSuggestionsUI = new AuthorSuggestionsUI($('#show-book-suggestion-modal'));
    window.gAuthorSuggestionsUI.init();
  });
