var EditBookUI = function(container){
  Library.call(this);
  this._bookToEdit = new Array();
  this._index = 0;
  this.$container = $(container);
};

EditBookUI.prototype = Object.create(Library.prototype);
//importing from Library

EditBookUI.prototype.init = function() {
  this._bindEvents();
};

EditBookUI.prototype._bindEvents = function () {

  $('.bookToEdit').on('click', $.proxy(this._handleModalOpen, this));
  $('table').on('click', '.bookToEdit', $.proxy(this._handleModalOpen, this));
  $('#submit-edit-button').on('click', $.proxy(this._handleApplyChanges, this));
};

EditBookUI.prototype._handleModalOpen = function (e) {

  var x = $(e.currentTarget).parent().siblings()[0].innerHTML;
  console.log(x[0]);
  var book = new Object();
  for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === x) {
      this._index = i;
      console.log(window.bookShelf[i].Title);
      book = window.bookShelf[i];
      console.log(i);
      i=window.bookShelf.length;
      }
    };

  this.$container.modal('show');
  var myDate = book.Published.getFullYear()+"-"+("0"+(book.Published.getMonth()+1)).slice(-2)+"-"+("0"+book.Published.getDate()).slice(-2);
  $('#book-title-edit-book').attr("value", book.Title);
  $('#edit-book-author').attr("value", book.Author);
  $('#edit-book-pages').val(book.Pages);
  $('#edit-book-pub-date').attr("value", myDate);
  $('#editRating').attr("value", book.Rating);
  $('#editSynopsis').val(book.Synopsis);

  return false;
};


EditBookUI.prototype._handleApplyChanges = function (index) {

    var bookEditObj = new Object();
    var edited_row = this.$container.find("#formEntryEdit").serializeArray();
      $.each(edited_row, function(i, objProp) {
          if(objProp.name === "Pages"){
            bookEditObj[objProp.name] = Number(objProp.value);
          }
          else {
            bookEditObj[objProp.name] = objProp.value;
          }
        });

      var book = new Book(bookEditObj);
      console.log(book);
      window.bookShelf[this._index]=book;
      this.setLocalStorage();
      console.log(window.bookShelf[this._index]);
      console.log(this._index);
      this._handleEventTrigger("objUpdate", {booksAdded: "Book was Edited"});
      this._bindEvents();
    };

    EditBookUI.prototype._handleAddBooksLib = function () {
    return this.addBooks(this._tempBookShelf);
};


$(function(){
  window.gEditBookUI = new EditBookUI("#edit-books-modal");
  window.gEditBookUI.init();
});
