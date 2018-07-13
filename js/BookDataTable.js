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
//need to discuss what bind events. Later

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
  var _self = this
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  $.each(window.bookShelf, function(index, book){
    $tbody.append(_self._createRow(book));
  });
  $("td:last-of-type").after("<td><button type='button' class='btn btn-info editBtn'>Edit</button></td>");
  $("td:last-of-type").after("<td><button type='button' class='close removeBtn' data-dismiss='alert'><span aria-hidden='true' style='color:red'>×</span><span class='sr-only'>Close</span></button></td>");
};

DataTable.prototype._createHeader = function(book) {
  var tr = document.createElement('tr');
  for (var key in book) {
    var th = document.createElement('th');
    $(th).text(key);
    tr.append(th);
}
  var th = document.createElement('th');
  $(th).text("Edit");
  tr.append(th);
  var th = document.createElement('th');
  $(th).text("Remove");
  tr.append(th);
// tr.append(document.createElement('td').append(deleteInput));
return tr;
};

DataTable.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  // var deleteInput = document.createElement('input');
  // var att = document.createAttribute("type");
  // att.value = "checkbox";
  // deleteInput.setAttributeNode(att);

  for(var key in book){

    var td = document.createElement('td');

      if (key === "Title"){
        var title = book[key];
        $(td).attr("class", "bookToEdit");
        $(td).text(title);
        tr.append(td);
      }

      else if (key === "Author") {
        var author = book[key];
        $(td).attr("class", "authorToEdit");
        $(td).text(author);
        tr.append(td);
      }

      else if (key === "Pages") {
        var pages = book[key];
        $(td).attr("class", "pagesToEdit");
        $(td).text(pages);
        tr.append(td);
      }

      else if (key === "Published"){
        var publishDate = book[key];
        var yearDate = publishDate.getFullYear();
        $(td).attr("class", "publishedToEdit");
        $(td).text(yearDate);
        tr.append(td);
      }

      else if (key === "Rating"){
        var pages = book[key];
        $(td).attr("class", "ratingToEdit");
        $(td).text(title);
        tr.append(td);
      }
      else if (key === "Synopsis") {
        var synopsisString =book[key];
        var truncSynopsis = synopsisString.substring(0,50);
        $(td).attr("title", synopsisString);
        $(td).attr("class", "synopsisToEdit");
        $(td).text(truncSynopsis);
        tr.append(td);
      }

    else {
        $(td).text(book[key]);
        tr.append(td);
    }


}
console.log("I am here");


  // }
  // tr.append(document.createElement('td').append(deleteInput));
  return tr;
};


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
