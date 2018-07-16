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
    var searchInput = $('#searchInput').val();
    console.log(searchInput);
    var searchResult = this.searchBooks(searchInput);
    console.log(searchResult);
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createSearchOutput(searchResult));
  return false;
  };

SearchBooksUI.prototype._createSearchOutput = function (searchResult) {
 // $('#searchOutput').html("#searchResult");
 
       }
     return ul;

};

$(function(){
  window.gSearchBooksUI = new SearchBooksUI($('#search-books-modal'));
  window.gSearchBooksUI.init();
});
