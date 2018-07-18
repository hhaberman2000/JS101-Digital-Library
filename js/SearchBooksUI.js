var SearchBooksUI = function(container) {
  this.$container = container;
  Library.call(this);
};

SearchBooksUI.prototype = Object.create(Library.prototype);

SearchBooksUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

SearchBooksUI.prototype._bindEvents = function () {
  $('#searchBtn').on('click', $.proxy(this._handleBookSearch, this));
  return false;
};

SearchBooksUI.prototype._handleBookSearch = function () {
  var searchVal = $('#searchInput').val();
  console.log(searchVal);
    if (window.bookShelf.length === 0) {
      alert("Can't do a search for an empty bookshelf.");
    } else {
      var searchResult = this.searchBooks(searchVal);
      this.$container.modal('show');
      this.$container.find('.modal-body').html(this._createSearchOutput(searchResult));
  }
    return false;
  };

SearchBooksUI.prototype._createSearchOutput = function (searchResult) {
    console.log(searchResult);
    $('#resultHeader').html("Found book(s) by "+searchResult[0].Author);
    var ul = document.createElement("ul");
      for (var i = 0; i < searchResult.length; i++) {
        var li = document.createElement("li");
        $(li).text(searchResult[i].Title);
        ul.append(li);
        }
      return ul;
    };

$(function(){
  window.gSearchBooksUI = new SearchBooksUI($('#search-books-modal'));
  window.gSearchBooksUI.init();
});
