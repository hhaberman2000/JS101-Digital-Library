var RemoveBooksUI = function(container) {
  this.$container = container;
  Library.call(this);
};

RemoveBooksUI.prototype = Object.create(Library.prototype);

RemoveBooksUI.prototype.init = function () {
  this._bindEvents();
};

RemoveBooksUI.prototype._bindEvents = function () {
  $('#removeBooks-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#rembook-btn-submit').on('click', $.proxy(this._handleBookRemoval, this));
};

RemoveBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};

RemoveBooksUI.prototype._handleBookRemoval = function () {
  var bookTitle = $("#removeByTitle").val();
  var author = $("#removeByAuthor").val();

  if (bookTitle && author) {
    alert("Only one field can be submitted")
  }
  else if(bookTitle) {
    this.removeBookTitle(bookTitle);
  }
  else if (author) {
    this.removeBookByAuthor(author);
  }
  else {
    alert("Please enter a title or author to remove.");
  }
  $("#formEntryRem")[0].reset();
};

$(function(){
  window.gRemoveBooksUI = new RemoveBooksUI($('#remove-books-modal'));
  window.gRemoveBooksUI.init();
});
