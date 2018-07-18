//Not Singleton
var Library = function(){ };

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
        console.log("Book title has already been added.");
        return this.hasBooks;
        }
      }

      window.bookShelf.push(book);
      this.setLocalStorage();
      this._handleEventTrigger("objUpdate", {booksAdded: "Book was added"});
      return this.hasBooks = true;
  };

Library.prototype.removeBookTitle = function(titleToRemove){
  // Purpose: Remove book from from the books array by its title.
  // Return:boolean true if the book(s) were removed, false if no books match
  var remTitleArray = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].Title.toLowerCase().search(titleToRemove.toLowerCase())> -1) {
       alert("Book " + window.bookShelf[i].Title + " has been removed.");
       window.bookShelf.splice(i,1);
       localStorage.setItem('book', JSON.stringify(window.bookShelf));
       remTitleArray.push(window.bookShelf[i]);
       i--;

       }
     }
     if (remTitleArray.length > 0) {
       this._handleEventTrigger("objUpdate", {booksAdded: "Book was removed"});
      return true;
    } else {
        alert("Book title is not in library.");
        return false;
      }
 };

Library.prototype.removeBookByAuthor = function(authorName){
// // Purpose: Remove a specific book from your books array by the author name.
// // Return: booleantrue if the book(s) were removed, false if no books match.
  var remBookAuthArray = [];

  for ( var i=0; i < window.bookShelf.length; i++) {
    if (window.bookShelf[i].Author.toLowerCase().search(authorName.toLowerCase())> -1) {
      remBookAuthArray.push(window.bookShelf[i]);
      window.bookShelf.splice(i,1);
      i--;
      console.log(remBookAuthArray);
      localStorage.setItem('book', JSON.stringify(window.bookShelf));
      }
    }

    if (remBookAuthArray.length > 0) {
      this._handleEventTrigger("objUpdate", {booksAdded: "Book was removed"});
      alert( remBookAuthArray.length + " Book(s) has been removed.")
      return true;
    }

    alert("This Author is not in library.");
    return false;
  };

Library.prototype.getRandomBook = function() {
  // Purpose: Return a random book object from your books array
  // Return: book object if you find a book, null if there are no books
  if (window.bookShelf.length === 0) {
    return null;
    }
    return window.bookShelf[Math.floor(Math.random() * window.bookShelf.length)];
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
   console.log(addBooksArray);
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
  // var allAuthorsNoDup;
  for (var i=0; i < window.bookShelf.length; i++) {
      allAuthors.push(window.bookShelf[i].Author);
    }
    return this.removeDuplicates(allAuthors);
};

Library.prototype.getBooks = function () {
  var allbooks = [];
  // var allAuthorsNoDup;
  for (var i=0; i < window.bookShelf.length; i++) {
      allbooks.push(window.bookShelf[i].Title);
    }

    return allbooks;
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


Library.prototype.setLocalStorage = function () {
  // Purpose: sets added books to local storage.
  // Return: return true.
  localStorage.setItem('book', JSON.stringify(window.bookShelf));
  return true;
};

Library.prototype.getLocalStorage = function () {
  // Purpose: Retrieves books from local storage.
  // Return: true
  if (localStorage.length) {
  var getBooks = JSON.parse(localStorage.getItem("book"));
   for (var i=0; i < getBooks.length; i++ ) {
     var bookFromStorage = new Book ({
        Cover : getBooks[i].Cover,
        Title : getBooks[i].Title,
        Author : getBooks[i].Author,
        Pages : getBooks[i].Pages,
        Published : new Date(getBooks[i].Published),
        Rating : getBooks[i].Rating,
        Synopsis : getBooks[i].Synopsis,
      });
      window.bookShelf.push(bookFromStorage);
    }

    return true;
  }
 return false;
};

Library.prototype.searchBooks = function (searchString) {
  console.log(searchString);
  var nSS = searchString.toLowerCase();
  var searchResult = [];
  var titleResult = [];
  var authorResult = [];
  console.log(parseInt(searchString));
  console.log(Date.parse(parseInt(searchString)));
  // console.log(window.bookShelf[i].Pages);

  for (var i=0; i < window.bookShelf.length; i++) {
    var title = window.bookShelf[i].Title.toLowerCase();
    var author = window.bookShelf[i].Author.toLowerCase();
    var published = window.bookShelf[i].Published;

    if (title.search(nSS) > -1 || author.search(nSS)> -1) {
      titleResult = this.getBookByTitle(searchString);
      authorResult = this.getBooksByAuthor(searchString);
      searchResult = titleResult.concat(authorResult);
      return searchResult;
    }

    else if (parseInt(searchString) === window.bookShelf[i].Pages || Date.parse(parseInt(searchString)) === Date.parse(published)){
       searchResult.push(window.bookShelf[i]);
       return searchResult;
    }
  }
    alert("No results found.")
    e.stopPropagation();
    return false;
};

Library.prototype._handleEventTrigger = function(sEvent, oData) {
  var oData = oData || {};
  if (sEvent) {
    var event = new CustomEvent(sEvent, oData);
    document.dispatchEvent(event);
  }
}


  var gLibrary = new Library();
