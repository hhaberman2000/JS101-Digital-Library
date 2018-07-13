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
    if (key === "Synopsis") {
      var synopsisString =book[key];
      var truncSynopsis = synopsisString.substring(0,50);
      $(td).attr("title", synopsisString);
      $(td).text(truncSynopsis);
      tr.append(td);
    }
      else if (key === "Published"){
        // console.log(book[key]);
        var publishDate = book[key];
        var yearDate = publishDate.getFullYear();
        $(td).text(yearDate);
        tr.append(td);
      }

    else {
        $(td).text(book[key]);
        tr.append(td);
    }

    $(td).button("Edit");
    tr.append(td);

}
  // }
  // tr.append(document.createElement('td').append(deleteInput));
  return tr;
};


$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
