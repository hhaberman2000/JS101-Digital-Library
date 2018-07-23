var DataTable = function(){
  Library.call(this);
  this.$container = $('#bookListings');
  this.libraryURL = "http://127.0.0.1:3002/Library";
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  // this.getLocalStorage();
  this._updateHeader();
  this._updateTable();
  this._bindEvents();
  this._bindCustomListeners();
  this.getBooks();
};

DataTable.prototype._bindEvents = function () {
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateHeader, this));
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
  // $(document).on('objUpdate', $.proxy(this._getBooksForTable, this));
};

// DataTable.prototype._getBooksForTable = function() {
//   console.log("I am getting books");
//   console.log(window.bookShelf);
//   $.ajax({
//     url: this.libraryURL,
//     dataType: 'json',
//     type: 'GET',
//     // data
//     success: (data) => {
//       console.log(data);
//       console.log("success");
//       console.log(data.length);
//       for (var i=0; data.length > i; i++)
//         window.bookShelf.push(data[i]);
//     }
//   })
// };


DataTable.prototype._updateHeader = function() {
  console.log("I am updating header");
  var _self = this
  var $thead = this.$container.find('thead');
  $thead.empty();
    console.log(window.bookShelf.length);
    if(window.bookShelf.length > 0) {
      var book = window.bookShelf[0];
      console.log(book);
      $thead.append(_self._createHeader(book));
  }
};

DataTable.prototype._updateTable = function (e) {
  var _self = this;
  var $tbody = this.$container.find('tbody');
  var rowCnt =0;
  var book = new Object;
  $tbody.empty();
  $.each(window.bookShelf, function(index, book){
    $tbody.append(_self._createRow(book));
  });
  console.log(book);
  $("td:last-of-type").after("<td><button type='button' class='btn btn-info bookToEdit'>Edit</button></td>");
  $("td:last-of-type").after("<td><button type='button' class='close bookToRemove' data-dismiss='alert'><span aria-hidden='true' style='color:red'>×</span><span class='sr-only'>Close</span></button></td>");
};

DataTable.prototype._createHeader = function(book) {
  var tr = document.createElement('tr');

  for (var key in book) {
    var th = document.createElement('th');

    if (key == "_id" || key == "__v") {
      }
      else {
          if (key === "Title"){
            $(th).attr("class", "titleToEdit");
            $(th).text(key);
            tr.append(th);
          }
          $(th).text(key);
          tr.append(th);
        }
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
  console.log(book);
  for(var key in book){
    var td = document.createElement('td');

    if (key != "_id"  && key != "__v"){

      if (key === "Cover"){
        var cover = book[key];
        $(td).html("<img class='imgBtn' src="+cover+" style='width: 90%''>");
        tr.append(td);
      }
      else if (key === "Title"){
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
        var publishDate = new Date(book[key]);

        console.log(publishDate);
        // var parseDate = publishDate.getFullYear()+"-"+("0"+(publishDate.getMonth()+1)).slice(-2)+"-"+("0"+publishDate.getDate()).slice(-2);
        var parseDate = ("0"+(publishDate.getMonth()+1)).slice(-2)+"-"+("0"+publishDate.getDate()).slice(-2)+"-"+publishDate.getFullYear();
        console.log(publishDate);
        // var yearDate = publishDate.getFullYear();
        $(td).attr("class", "publishedToEdit");
        $(td).data(key,book[key]);
        $(td).text(parseDate);
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
        var synopsisString = book[key];
        var truncSynopsis = synopsisString.substring(0,120);
        $(td).attr("title", synopsisString);
        $(td).attr("class", "synopsisToEdit");
        $(td).data(key,book[key]);
        $(td).text(truncSynopsis);
        tr.append(td);
      }
     }
    }
    return tr;
  };

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
