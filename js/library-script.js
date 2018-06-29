
var Library = function(){
this.bookShelf = new Array();
  }

var Book = function(args){
   this.bookTitle = args.bookTitle;
   this.author = args.author;
   this.numberOfPages = args.numberOfPages;
   this.publishDate = new Date(args.publishDate);
  }

Library.prototype.addBook = function(book) {
  // Purpose: Add a book object to your books array.
  // Return:boolean true if it is not already added, false if it is already added.
   this.hasBooks = false;
   for ( var i=0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].bookTitle === book.bookTitle) {
        console.log("Book title has already been added.");
        return this.hasBooks;
        }
      }
    this.bookShelf.push(book);
    this.setLocalStorage();
    console.log( book + "title has already been added.");
    return this.hasBooks=true;
  };

Library.prototype.removeBookTitle = function(titleToRemove){
  // Purpose: Remove book from from the books array by its title.
  // Return:boolean true if the book(s) were removed, false if no books match
  for ( var i=0; i < this.bookShelf.length; i++) {
     if (this.bookShelf[i].bookTitle.toLowerCase().search(titleToRemove.toLowerCase())> -1) {
       this.bookShelf.splice(i,1);
       localStorage.setItem('book', JSON.stringify(this.bookShelf));
       console.log("Title" + titleToRemove + "has been removed.");
       return true;
       }
     }
     console.log("Book title is not in library.");
   return false;
 };

Library.prototype.removeBookByAuthor = function(authorName){
// // Purpose: Remove a specific book from your books array by the author name.
// // Return: booleantrue if the book(s) were removed, false if no books match
  for ( var i=0; i < this.bookShelf.length; i++) {
    if (this.bookShelf[i].author.toLowerCase().search(authorName.toLowerCase())> -1) {
      this.bookShelf.splice(i,1);
      localStorage.setItem('book', JSON.stringify(this.bookShelf));
      return true;
      }
    }
    console.log("This Author is not in library.");
    return false;
};

Library.prototype.getRandomBook = function() {
  // Purpose: Return a random book object from your books array
  // Return: book object if you find a book, null if there are no books
  if (this.bookShelf.length === 0) {
    return null;
    }
    // localStorage.getItem('book', JSON.stringify(this.bookShelf));
    return this.bookShelf[Math.floor(Math.random() * this.bookShelf.length)];

  };

Library.prototype.getBookByTitle = function(titleString) {
//   // Purpose: Return all books that completely or partially matches the string title passed into the function
//   // Return: array of book objects if you find books with matching titles, empty array if no books are found.
  var booksByTitle = [];
  for ( var i=0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].bookTitle.toLowerCase().search(titleString.toLowerCase())> -1) {
       booksByTitle.push(this.bookShelf[i]);
       }
     }
    return booksByTitle;
  };

Library.prototype.getBooksByAuthor = function (authorString) {
  // Purpose: Finds all books where the author’s name partially or completely match-es the authorName argument passed to the function.
  // Return:array of books if you find books with match authors, empty array if no books match
  var booksByAuthor = [];
  for ( var i=0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].author.toLowerCase().search(authorString.toLowerCase())> -1) {
       booksByAuthor.push(this.bookShelf[i]);
       }
     }
    return booksByAuthor;
  };

Library.prototype.addBooks = function (books) {
   // Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  // Return:  number of books successfully added, 0 if no books were added
  var newBooksCounter = 0;
  for ( var i=0; i < addBooksArray.length; i++) {
       this.addBook(books[i]);
       if (this.hasBooks) {
         newBooksCounter++;
        }
      }
     return newBooksCounter;
   };

Library.prototype.getAuthors = function () {
// Purpose: Find the distinct authors’ names from all books in your library.
// Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist.
  var allAuthors = [];
  for (var i=0; i < this.bookShelf.length; i++) {
      allAuthors.push(this.bookShelf[i].author);
    }
    return allAuthors;
};

Library.prototype.getRandomAuthorName = function() {
// Purpose: Retrieves a random author name from your books collection
 // Return: string author name, null if no books exist
  if (this.bookShelf.length === 0) {
    return null;
  }
  return this.getRandomBook().author;
}

Library.prototype.setLocalStorage = function () {
  localStorage.setItem('book', JSON.stringify(this.bookShelf));
  return true;
};

Library.prototype.getLocalStorage = function () {
  var getBooks = JSON.parse(localStorage.getItem("book"));
   for (var i=0; i < getBooks.length; i++ ) {
     var bookFromStorage = new Book ({
        bookTitle : getBooks[i].bookTitle,
        author : getBooks[i].author,
        numberOfPages : getBooks[i].numberOfPages,
        publishDate : new Date(getBooks[i].publishDate),
      });
      this.bookShelf.push(bookFromStorage);
    }
   return true;
};

// multiple Book Listing

var gBook1 = new Book( {
  bookTitle : "IT",
  author : "Stephen King",
  numberOfPages: 1138,
  publishDate : "1980"
});

var gBook2= new Book( {
  bookTitle : "Life of PI",
  author : "Yann Martel",
  numberOfPages : 280,
  publishDate : "2001"
});

var  gBook3 = new Book( {
  bookTitle : "Lord of the Flies",
  author : "William Golding",
  numberOfPages : 260,
  publishDate : "1954"
});

var gBook4= new Book ({
  bookTitle : "For Whom The Bell Tolls",
  author : "Ernest Hemingway",
  numberOfPages : 320,
  publishDate : "1950"
});

var gBook5= new Book ({
  bookTitle : "2001 A Space Odyssey",
  author : "Authur C Clarke ",
  numberOfPages : 510,
  publishDate : "1969"
});

var gBook6= new Book ({
  bookTitle : "The Grapes Of Wrath",
  author : "John Steinbeck ",
  numberOfPages : 275,
  publishDate : "1939"
});

var gBook7= new Book ({
  bookTitle : "Of Mice and Men",
  author : "John Steinbeck ",
  numberOfPages : 195,
  publishDate : "1937"
});

var gBook8= new Book ({
  bookTitle : "A Friend Of The Earth",
  author : "T C Boyle ",
  numberOfPages : 290,
  publishDate : "2000"
});

var gBook9= new Book ({
  bookTitle : "Drop City",
  author : "T C Boyle ",
  numberOfPages : 310,
  publishDate : "2003"
});

var gBook10= new Book ({
  bookTitle : "Tortilla Curtain",
  author : "T C Boyle ",
  numberOfPages : 366,
  publishDate : "1995"
});

var gBook11= new Book ({
  bookTitle : "The Great Gatsby",
  author : "F Scott Fitzgerald ",
  numberOfPages : 366,
  publishDate : "1925"
});

var gBook12= new Book ({
  bookTitle : "Moby Dick",
  author : "Herman Melville ",
  numberOfPages : 896,
  publishDate : "1851"
});

//Multiple Book Listing Array.

var addBooksArray = [gBook5, gBook6, gBook7, gBook8, gBook9, gBook10, gBook11, gBook12];

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  //window.gLibrary = getLocalStorage(parsedArray);
    // if ( parsedArray.length === 0) {
    //   console.log("Local Storage is empty");
    // }
    // else {
  window.gLibrary.getLocalStorage();
    //   }
  // getLocalStorage();
  // window.gLibrary.addBook(gBook1);
  // window.gLibrary.addBook(gBook2);
  // window.gLibrary.addBook(gBook3);
  // window.gLibrary.addBook(gBook4);
  // window.gLibrary.addBooks(addBooksArray);
  // window.gLibrary.removeBookByAuthor("Boyle");
  // window.gLibrary.getRandomBook();
  // window.gLibrary.getRandomAuthorName();
  // window.gLibrary.getBookByTitle("x");
  // window.gLibrary.getBooksByAuthor("Boyle");

  //window.gLibrary.getAuthors();
 });
