class ajaxExample {
  constructor(){
    this.libraryURL ='http://127.0.0.1:3002/Library';
  };

  init(){
    this._bindEvents();
  };

  _bindEvents() {
    // console.log("bind events");
    $('button.get-books').on('click', this._handleGetBooks.bind(this));
    $('button.add-book').on('click', this._handleAddBook.bind(this));
  };

  _handleGetBooks() {
    $.ajax({
      url: this.libraryURL,
      dataType: 'json',
      type: 'GET',
      // data
      success: (data) => {
        console.log(data);
        console.log("success");
      }
    })
  };
  _handleAddBook() {
    let formData = this._getFormData();
    $.ajax({
      url: this.libraryURL,
      dataType: 'json',
      method: 'POST',
      data: formData,
      success: (data) => {
      console.log(data);
      }
    });
  };

  _getFormData() {
    let aForm = $('form').serializeArray();
    let oData = new Object();

    aForm.map((obj, i)=>{
      oData[obj.name] = obj.value;
    });
    return oData;
  };
};

$(function() {
  window.gAjaxExample = new ajaxExample();
  window.gAjaxExample.init();
});
