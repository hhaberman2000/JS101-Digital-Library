var RemoveBooksUI = function(container) {
  this.$container = container;
  Library.call(this);
};

RemoveBooksUI.prototype = Object.create(Library.prototype);

RemoveBooksUI.prototype.init = function () {
  this._bindEvents();
};

RemoveBooksUI.prototype._bindEvents = function () {
  // this.$container.find('#removeBooks-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#removeBooks-btn').on('click', $.proxy(this._handleModalOpen, this));
  $('#rembook-btn-submit').on('click', $.proxy(this._handleBookRemoval, this));
};


RemoveBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};

RemoveBooksUI.prototype._handleBookRemoval = function () {
  var bookTitle = $("#removeByTitle").val();
  var author = $("#removeByAuthor").val();
    if(bookTitle) {
      this.removeBookTitle(bookTitle);
    }
    else if (author) {
      this.removeBookByAuthor(author);
    }
    else {
      alert("type something");
    }
    $("#formEntryRem")[0].reset();
};

$(function(){
  window.gRemoveBooksUI = new RemoveBooksUI($('#remove-books-modal'));
  window.gRemoveBooksUI.init();
});
