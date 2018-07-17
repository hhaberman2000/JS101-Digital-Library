var RemoveBookTableUI = function(container) {
  this.$container = $('#bookListings');
  this._index = 0;
  Library.call(this);
};

RemoveBookTableUI.prototype = Object.create(Library.prototype);

RemoveBookTableUI.prototype.init = function () {
  this._bindEvents();
};

RemoveBookTableUI.prototype._bindEvents = function () {
  $('table').on('click','.bookToRemove',$.proxy(this._handleBookRemovalBtn, this));
};

RemoveBookTableUI.prototype._handleBookRemovalBtn = function (e) {
  var bookTitle = $(e.currentTarget).parent().siblings()[0].innerHTML;
  for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === bookTitle) {
        this.removeBookTitle(bookTitle);
      }
    };
    e.stopPropagation();
  };

$(function(){
  window.gRemoveBookTableUI = new RemoveBookTableUI();
  window.gRemoveBookTableUI.init();
});
