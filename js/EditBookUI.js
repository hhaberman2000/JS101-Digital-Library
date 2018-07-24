var EditBookUI = function(container){
  Library.call(this);
  this._bookToEdit = new Array();
  this._index = 0;
  this.$container = $(container);
  this.encFileEdt;
  this.bookObj = new Object();
};

EditBookUI.prototype = Object.create(Library.prototype);
//importing from Library

EditBookUI.prototype.init = function() {
  this._bindEvents();
};

EditBookUI.prototype._bindEvents = function () {
  $('table').on('click', '.bookToEdit', $.proxy(this._handleModalOpen, this));
  $('#submit-edit-button').on('click', $.proxy(this._handleApplyChanges, this));
  this.$container.find('#imgInpEdit').on('change',$.proxy(this._handleEditBookCover, this));
};

EditBookUI.prototype._handleEditBookCover = function () {
//Loading image into file reader
console.log("cover here");
  var preview = document.querySelector('#imgUploadEdit');
  var file    = document.querySelector('#imgInpEdit').files[0];
  var reader  = new FileReader();
  var _self = this;

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    _self.encFileEdt = reader.result

  });
 if (file) {
   reader.readAsDataURL(file);
  }
console.log(_self.encFileEdt);
};

EditBookUI.prototype._handleModalOpen = function (e) {
  // Using title from the row to select object to edit.
  var titleRow = $(e.currentTarget).parent().siblings()[1].innerHTML;
  // var bookObjEdt = new Object();
  for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === titleRow) {
      this._index = i;
      this.bookObj = window.bookShelf[i];
      i = window.bookShelf.length;
    }

  };

  this.$container.modal('show');

  var pubDate = new Date(this.bookObj.Published);
  var parseDate = pubDate.getFullYear()+"-"+("0"+(pubDate.getMonth()+1)).slice(-2)+"-"+("0"+pubDate.getDate()).slice(-2);
  $('#imgUploadEdit').attr("src", this.bookObj.Cover);
  $('#book-title-edit-book').attr("value", this.bookObj.Title);
  $('#edit-book-author').attr("value", this.bookObj.Author);
  $('#edit-book-pages').val(this.bookObj.Pages);
  $('#edit-book-pub-date').attr("value", parseDate);
  $('#editRating').attr("value", this.bookObj.Rating);
  $('#editSynopsis').val(this.bookObj.Synopsis);

  return false;
};


EditBookUI.prototype._handleApplyChanges = function () {
  // Getting edited values from form input fields.
  var book = new Object();
  var edtBook = this.$container.find("#formEntryEdit").serializeArray();
  $.each(edtBook, function(i, objProp) {
    if(objProp.name === "Pages"){
      book[objProp.name] = Number(objProp.value);
    } else {
      book[objProp.name] = objProp.value;
    }
  });
  book.Cover = $('#imgUploadEdit').attr("src");
  console.log(book);
  this.editBook(book);
  // this.addBook(book);
  // for ( var i=0; i < window.bookShelf.length; i++) {
  //     if (window.bookShelf[i].Title === book.Title) {
  //         var edtBook = window.bookShelf[i];
  //         console.log(edtBook);
  //         this.editBook(edtBook);
  //       }
  //     }
  this._handleEventTrigger("objUpdate", {booksAdded: "Book was Edited"});
  this._bindEvents();
  // $("#formEntryEdit")[0].reset();
  return true;
};


$(function(){
  window.gEditBookUI = new EditBookUI("#edit-books-modal");
  window.gEditBookUI.init();
});
