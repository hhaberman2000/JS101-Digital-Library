var ShowBooksUI = function(container) {
  this.$container = container;
  Library.call(this);
};

ShowBooksUI.prototype = Object.create(Library.prototype);

ShowBooksUI.prototype.init = function () {
  this._bindEvents();
  return false;
};

ShowBooksUI.prototype._bindEvents = function () {
  $('#showBooks-btn').on('click', $.proxy(this._handleShowBooks, this));
  return false;
};

ShowBooksUI.prototype._handleShowBooks = function () {
  var books = window.bookShelf;
  console.log(books);
  if (books.length) {
    this.$container.modal('show');
    this.$container.find('.modal-body').html(this._createUlOfBooks(books));
  } else {
    alert('Nothing in library!');
  }
  return false;
  };

  ShowBooksUI.prototype._createUlOfBooks = function (books) {
    console.log(books);
    console.log(books.length);
    console.log(books.Title);
   var ul = document.createElement("ul");
   for (var i = 0; i < books.length; i++) {
     var li = document.createElement("li");
     $(li).attr("class", "selectBookUl");
     $(li).text(books[i].Title);
     ul.append(li);
   }
   return ul;
  };

  $(function(){
    window.gShowBooksUI = new ShowBooksUI($('#show-all-books-modal'));
    window.gShowBooksUI.init();
  });
