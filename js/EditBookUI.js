var EditBookUI = function(container){
  Library.call(this);
  this._bookToEdit = new Array();
  this._index = 0;
  this.$container = $(container);
  this.encFileEdt;
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
  var preview = document.querySelector('#imgUploadEdit');
  var file    = document.querySelector('#imgInpEdit').files[0];
  var reader  = new FileReader();
  var _self = this;

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    _self.encFileEdt = reader.result;
  });
 if (file) {
   reader.readAsDataURL(file);
  }

};

EditBookUI.prototype._handleModalOpen = function (e) {
  // Using title from the row to select object to edit.
  var titleRow = $(e.currentTarget).parent().siblings()[1].innerHTML;
  var bookObjEdt = new Object();
  for (var i=0; window.bookShelf.length > i; i++) {
    if (window.bookShelf[i].Title === titleRow) {
      this._index = i;
      bookObjEdt = window.bookShelf[i];
      i=window.bookShelf.length;
    }
  };

  this.$container.modal('show');
  // Displaying current values for the book object.
  var myDate = bookObjEdt.Published.getFullYear()+"-"+("0"+(bookObjEdt.Published.getMonth()+1)).slice(-2)+"-"+("0"+bookObjEdt.Published.getDate()).slice(-2);
  $('#imgUploadEdit').attr("src", bookObjEdt.Cover);
  $('#book-title-edit-book').attr("value", bookObjEdt.Title);
  $('#edit-book-author').attr("value", bookObjEdt.Author);
  $('#edit-book-pages').val(bookObjEdt.Pages);
  $('#edit-book-pub-date').attr("value", myDate);
  $('#editRating').attr("value", bookObjEdt.Rating);
  $('#editSynopsis').val(bookObjEdt.Synopsis);

  return false;
};


EditBookUI.prototype._handleApplyChanges = function () {
  // Getting edited values from form input fields.
  var bookEditObj = new Object();
  var edtBook = this.$container.find("#formEntryEdit").serializeArray();
  $.each(edtBook, function(i, objProp) {
    if(objProp.name === "Pages"){
      bookEditObj[objProp.name] = Number(objProp.value);
    } else {
      bookEditObj[objProp.name] = objProp.value;
    }
  });


  var book = new Book(bookEditObj);
  book.Cover =this.encFileEdt;
  window.bookShelf[this._index] = book;
  // this.setLocalStorage();
  this._handleEventTrigger("objUpdate", {booksAdded: "Book was Edited"});
  this._bindEvents();
  // $("#formEntryEdit")[0].reset();
  return true;
};



$(function(){
  window.gEditBookUI = new EditBookUI("#edit-books-modal");
  window.gEditBookUI.init();
});
