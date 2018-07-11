var ShowAuthorsUI = function(container) {
  this.$container = container;
  Library.call(this);
};

ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

ShowAuthorsUI.prototype._bindEvents = function () {
  $('#author-btn').on('click', $.proxy(this._handleShowAuthors, this));
  return false;
};

ShowAuthorsUI.prototype._handleShowAuthors = function () {

  var arrayAuthors = this.getAuthors();
  if (arrayAuthors.length) {
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createUlOfAuthors(arrayAuthors));
  } else {
    alert('Nothing in library!');
  }
  return false;
  };

ShowAuthorsUI.prototype._createUlOfAuthors = function (arrayAuthors) {
 var ul = document.createElement("ul");
 for (var i = 0; i < arrayAuthors.length; i++) {
   var li = document.createElement("li");
   $(li).text(arrayAuthors[i]);
   ul.append(li);
 }
 return ul;
};

$(function(){
  window.gShowAuthorsUI = new ShowAuthorsUI($('#show-all-authors-modal'));
  window.gShowAuthorsUI.init();
});
