// Not Singleton
var bookShelf = new Array();


//Singleton
// (function ()  {
//   var instance;
//   Library= function() {
//     if (instance) {
//       return instance;
//     }
//     instance = this;
//     this.bookShelf= new Array();
//   }
// })();
var getRowIndex = function() {
  var x = document.getElementsByTagName('tr');
  console.log(x.length);
  console.log(x[1].rowIndex);
  y= $('button.editBtn').parent().first().text();
  console.log(y);
};
