var DataTable = function(){
  Library.call(this);
  this.$container = $('#bookListings');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this.getLocalStorage();
  this._updateHeader();
  this._updateTable();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateHeader, this));
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
};


DataTable.prototype._updateHeader = function() {
  var _self = this
  var $thead = this.$container.find('thead');
  $thead.empty();
    if(window.bookShelf.length > 0) {
      var book = window.bookShelf[0];
      $thead.append(_self._createHeader(book));
  }
};

DataTable.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var _self = this;
  var $tbody = this.$container.find('tbody');
  var rowCnt =0;
  $tbody.empty();
  $.each(window.bookShelf, function(index, book){
    $tbody.append(_self._createRow(book));
  });

  // $("td:first-of-type").before("<td><img src=''></td>");
  $("td:last-of-type").after("<td><button type='button' class='btn btn-info bookToEdit'>Edit</button></td>");
  $("td:last-of-type").after("<td><button type='button' class='close bookToRemove' data-dismiss='alert'><span aria-hidden='true' style='color:red'>×</span><span class='sr-only'>Close</span></button></td>");

};

DataTable.prototype._createHeader = function(book) {

  var tr = document.createElement('tr');

  for (var key in book) {
    var th = document.createElement('th');

    if (key === "Title"){
      $(th).attr("class", "titleToEdit");
      $(th).text(key);
      tr.append(th);
    }

    $(th).text(key);
    tr.append(th);


}

  var th = document.createElement('th');
  $(th).text("Edit");
  tr.append(th);

  var th = document.createElement('th');
  $(th).text("Remove");
  tr.append(th);
  return tr;

};

DataTable.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  $(tr).attr("class", "selectBookRow")
  for(var key in book){
    var td = document.createElement('td');

      if (key === "Cover"){
        var cover = book[key];
        $(td).html("<img class='imgBtn' src="+cover+" style='width: 140%''>");
        tr.append(td);
      }


      if (key === "Title"){
        var title = book[key];
        $(td).attr("class", "titleToEdit");
        $(td).data(key,book[key]);
        $(td).text(title);
        tr.append(td);
      }

      else if (key === "Author") {
        var author = book[key];
        $(td).attr("class", "authorToEdit");
        $(td).data(key,book[key]);
        $(td).text(author);
        tr.append(td);
      }

      else if (key === "Pages") {
        var pages = book[key];
        $(td).attr("class", "pagesToEdit");
        $(td).attr("type", "number");
        $(td).data(key,book[key]);
        $(td).html(pages);
        tr.append(td);
      }

      else if (key === "Published"){
        var publishDate = book[key];
        var yearDate = publishDate.getFullYear();
        $(td).attr("class", "publishedToEdit");
        $(td).data(key,book[key]);
        $(td).text(yearDate);
        tr.append(td);
      }

      else if (key === "Rating"){
        var rating = book[key];
        $(td).attr("class", "ratingToEdit");
        $(td).data(key,book[key]);
        $(td).text(rating);
        tr.append(td);
      }
      else if (key === "Synopsis") {
        var synopsisString =book[key];
        var truncSynopsis = synopsisString.substring(0,120);
        $(td).attr("title", synopsisString);
        $(td).attr("class", "synopsisToEdit");
        $(td).data(key,book[key]);
        $(td).text(truncSynopsis);
        tr.append(td);
      }

    // else {
    //     $(td).text(book[key]);
    //     $(td).data(key,book[key]);
    //     tr.append(td);
    //   }
    }
    return tr;
  };


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
