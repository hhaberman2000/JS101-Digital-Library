var DataTable = function(){
  Library.call(this);
  this.$container = $('#bookListings');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  console.log("i am init");
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
};

DataTable.prototype._createHeader = function(book) {
  console.log("book");
  var tr = document.createElement('tr');
  for (var key in book) {
    var th = document.createElement('th');
    $(th).text(key);
    tr.append(th);
}
// tr.append(document.createElement('td').append(deleteInput));
return tr;
};

DataTable.prototype._createRow = function (book) {
  console.log(book+ "create row");
  var tr = document.createElement('tr');
  // var deleteInput = document.createElement('input');
  // var att = document.createAttribute("type");
  // att.value = "checkbox";
  // deleteInput.setAttributeNode(att);

  for(var key in book){
    var td = document.createElement('td');
    if (book[key] !== "publishDate") {
      console.log(book[key]);
      $(td).text(book[key]);
      tr.append(td);
    } else {
      var dateYear = book[key].getFullYear() + 1;
      $(td).text(dateYear);
    }

  }
  // tr.append(document.createElement('td').append(deleteInput));
  return tr;
};


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
