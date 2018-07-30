//Not Singleton
var Library = function(){
};

//Singleton
// (function ()  {
//   var instance;
//   Library= function() {
//     if (instance) {
//       return instance;
//     }
//     instance = this;
//     window.bookShelf= new Array();
//   }
// })();

Library.prototype.addBook = function(book) {
// Purpose: Add a book object to your books array.
// Return:boolean true if it is not already added, false if it is already added.
 this.hasBooks = false;
 for ( var i=0; i < window.bookShelf.length; i++) {
    if (window.bookShelf[i].Title === book.Title) {
      alert("This Title has already been added to the bookshelf.")
      return this.hasBooks;
      }
  }
  $.ajax({
    url: window.libraryURL,
    dataType: 'json',
    method: 'POST',
    data: book,
    success: (data) => {
      window.bookShelf.push(data);
      this._handleEventTrigger("objUpdate", {booksAdded: "Book was added"});
    }
  });
  return this.hasBooks = true;
};

Library.prototype.editBook = function(book) {

  for ( var i=0; i < window.bookShelf.length; i++) {
    if (window.bookShelf[i].Title === book.Title) {

      var ChgBook = new Book(book);
      $.ajax({
        url: window.libraryURL + window.bookShelf[i]._id,
        dataType: 'json',
        method: 'PUT',
        data: book,
        success: (data) => {
          window.bookShelf[i].Title = data.Title;
          window.bookShelf[i].Author = data.Author;
          window.bookShelf[i].Pages = data.Pages;
          window.bookShelf[i].Published = data.Published;
          window.bookShelf[i].Rating = data.Rating;
          window.bookShelf[i].Synopsis = data.Synopsis;
          window.bookShelf[i].Cover = data.Cover
          this._handleEventTrigger("objUpdate", {booksAdded: "Book was edited"});
        }
      });
      return this.hasBooks = true;
    }
  }
};


Library.prototype.removeBookTitle = function(titleToRemove){
  // Purpose: Remove book from from the books array by its title.
  // Return:boolean true if the book(s) were removed, false if no books match
  for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title.toLowerCase().search(titleToRemove.toLowerCase())> -1) {
      $.ajax({
        url: window.libraryURL + window.bookShelf[i]._id,
        dataType: 'text',
        type: 'DELETE',
        success: (data) => {
          this._handleEventTrigger("objUpdate", {booksAdded: "Book was removed"});
          }
        })
        window.bookShelf.splice(i,1);
      i--;
     }
   }
 };

Library.prototype.removeBookByAuthor = function(authorName){
// // Purpose: Remove a specific book from your books array by the author name.
// // Return: booleantrue if the book(s) were removed, false if no books match.
  var remBookAuthArray = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
    if (window.bookShelf[i].Author.toLowerCase().search(authorName.toLowerCase())> -1) {
        $.ajax({
        url: window.libraryURL + window.bookShelf[i]._id,
        dataType: 'text',
        type: 'DELETE',
        // data: bookID,
        success: (data) => {
          this._handleEventTrigger("objUpdate", {booksAdded: "Book was removed"});
          }
        })

      remBookAuthArray.push(window.bookShelf[i]);
      window.bookShelf.splice(i,1);
      i--;
      }
    }

    if (remBookAuthArray.length > 0) {
      alert( remBookAuthArray.length + " Book(s) has been removed.")

    } else {
      alert("This Author is not in library.");

    }
  };

Library.prototype.getRandomBook = function() {
  // Purpose: Return a random book object from your books array
  // Return: book object if you find a book, null if there are no books
  if (window.bookShelf.length === 0) {
    return null;
    }
    var randBook = window.bookShelf[Math.floor(Math.random() * window.bookShelf.length)];
    $.ajax({
      url: window.libraryURL + randBook._id,
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        alert("Found random book ''"+data.Title+"'' in Mongo: "+data._id);
      }
    })
    return randBook;
  };

Library.prototype.getBookByTitle = function(titleString) {
  // Purpose: Return all books that completely or partially matches the string title passed into the function
  // Return: array of book objects if you find books with matching titles, empty array if no books are found.
  var booksByTitle = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].Title.toLowerCase().search(titleString.toLowerCase())> -1) {
       booksByTitle.push(window.bookShelf[i]);
       }
     }
    return booksByTitle;
  };

Library.prototype.getBooksByAuthor = function (authorString) {
  // Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
  // Return:array of books if you find books with match authors, empty array if no books match
  var booksByAuthor = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].Author.toLowerCase().search(authorString.toLowerCase())> -1) {
       booksByAuthor.push(window.bookShelf[i]);
       }
     }
    //this._handleEventTrigger("objUpdate2", {AuthorBooks: "Author suggested books"});
    return booksByAuthor;
  };

Library.prototype.addBooks = function (addBooksArray) {
// Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
 // Return:  number of books successfully added, 0 if no books were added
 var newBooksCounter = 0;
 for ( var i=0; i < addBooksArray.length; i++) {
     this.addBook(addBooksArray[i]);
     if (this.hasBooks) {
       newBooksCounter++;
      }
    }
    this._handleEventTrigger("objUpdate", {booksAdded: newBooksCounter + " books were added"});
    return newBooksCounter;
};

Library.prototype.removeDuplicates = function(arr) {
// Purpose: remove duplicates out of the array.
// Return: unique array with distinct authors
  var uniqueArray = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return uniqueArray
}

Library.prototype.getAuthors = function () {
// Purpose: Find the distinct authors’ names from all books in your library.
// Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist.
  var allAuthors = [];
  for (var i=0; i < window.bookShelf.length; i++) {
    allAuthors.push(window.bookShelf[i].Author);
    }
    return this.removeDuplicates(allAuthors);
};

Library.prototype.getBooks = function () {
  $.ajax({
    url: this.libraryURL,
    dataType: 'json',
    type: 'GET',
    success: (data) => {
      window.bookShelf=data;
      this._handleEventTrigger("objUpdate", {booksAdded: "Book was added"});
    }
  })
return false;
};


Library.prototype.getRandomAuthorName = function() {
 // Purpose: Retrieves a random author name from your books collection
 // Return: string author name, null if no books exist
  if (window.bookShelf.length === 0) {
    return null;
  }
   var authorRand = this.getRandomBook().Author;
   return authorRand;
}


Library.prototype.searchBooks = function (searchString) {
  var nSS = searchString.toLowerCase();
  var searchResult = [];

  for (var i=0; i < window.bookShelf.length; i++) {
    var title = window.bookShelf[i].Title.toLowerCase();
    var author = window.bookShelf[i].Author.toLowerCase();
    var published = window.bookShelf[i].Published;
    var pages = window.bookShelf[i].Pages;
    var date = published.toString().toLowerCase();

    if (title.search(nSS) > -1) {
      searchResult.push(window.bookShelf[i]);
      console.log(searchResult);
    }
    else if (author.search(nSS)> -1) {
      searchResult.push(window.bookShelf[i]);
      console.log(searchResult);
    }
    else if (parseInt(searchString) === pages || date.search(nSS)> -1) {
       searchResult.push(window.bookShelf[i]);
    }
  }
    return searchResult;
};

Library.prototype._handleEventTrigger = function(sEvent, oData) {
  var oData = oData || {};
  if (sEvent) {
    var event = new CustomEvent(sEvent, oData);
    document.dispatchEvent(event);
  }
}

var gLibrary = new Library();
