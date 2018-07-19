var AuthorSuggestionsUI = function(container) {
  this.$container = container;
  Library.call(this);
  this._authorBooks = new Array();
};

AuthorSuggestionsUI.prototype = Object.create(Library.prototype);

AuthorSuggestionsUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

AuthorSuggestionsUI.prototype._bindEvents = function () {
  $('#authorSugg-btn').on('click', $.proxy(this._handleAuthSugg, this));
  return false;
};

AuthorSuggestionsUI.prototype._handleAuthSugg = function () {
  var authorName = this.getRandomAuthorName();
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createAuthBooks(authorName));
  return true;
  };

  AuthorSuggestionsUI.prototype._createAuthBooks = function (authorName) {
    $('#authorPick').html(authorName);
    this._authorBooks = this.getBooksByAuthor(authorName);
    var ul = document.createElement("ul");
      for (var i = 0; i < this._authorBooks.length; i++) {
        var li = document.createElement("li");
        $(li).attr("class", "selectBookUl");
        $(li).text(this._authorBooks[i].Title);
        ul.append(li);
      }
    return ul;
   };

  $(function(){
    window.gAuthorSuggestionsUI = new AuthorSuggestionsUI($('#author-suggestion-modal'));
    window.gAuthorSuggestionsUI.init();
  });
