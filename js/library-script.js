// Book
// A book must be an object
// A book object must have the following properties:
//   ○title - string representing the title of the book
//   ○author - string representing the authors name
//   ○numberOfPages - number representing the total page numbers
//   ○publishDate - javascript date object representing the date the book was published


var Library = function(){
this.bookShelf = new Array();
}

var Book = function(booktitle, author, numberOfPages, publishDate){
  this.booktitle = booktitle;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = new Date(publishDate);
 }


Library.prototype.addBook = function(book) {
  // Purpose: Add a book object to your books array.
  // Return:boolean true if it is not already added, false if it is already added.
   for ( var i=0; i < this.bookShelf.length; i++) {
      if (this.bookShelf[i].booktitle.indexOf(book.booktitle) > -1) {
        console.log("Book title has already been added.");
        return false;
        }
      }
    this.bookShelf.push(book);
    return true;
  }

Library.prototype.removeBookTitle = function(Title){
  // Purpose: Remove book from from the books array by its title.
  // Return:boolean true if the book(s) were removed, false if no books match
  for ( var i=0; i < this.bookShelf.length; i++) {
     if (this.bookShelf[i].booktitle === Title) {
       this.bookShelf.splice(i,1);
       return true;
       }
     }
   console.log("Book title is not in library.");
   return false;
 };

Library.prototype.removeBookByAuthor = function(authorName){
// Purpose: Remove a specific book from your books array by the author name.
// Return: booleantrue if the book(s) were removed, false if no books match
  for ( var i=0; i < this.bookShelf.length; i++) {
    if (this.bookShelf[i].author === authorName) {
      this.bookShelf.splice(i,1);
      return true;
      }
    }
    console.log("Book title is not in library.");
    return false;
};

Library.prototype.getRandomBook = function() {
  if (this.bookShelf.length === 0) {
    return null;
  }
  return this.bookShelf[Math.floor(Math.random() * this.bookShelf.length)];

  // Purpose: Return a random book object from your books array
  // Return: book object if you find a book, null if there are no books
}

Library.prototype.getBookByTitle = function(title) {
  // Purpose: Return all books that completely or partially matches the string title passed into the function
  // Return: array of book objects if you find books with matching titles, empty array if no books are found
}

Library.prototype.getAuthors = function () {
  // Return:array of books if you find books with match authors, empty array if no books match○addBooks(books)Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  // Return: number number of books successfully added, 0 if no books were added ○getAuthors()
}

Library.prototype.getRandomAuthorName = function() {
  // Purpose: Retrieves a random author name from your books collection
  // Return: string author name, null if no books exist
  if (this.bookShelf.length === 0) {
    return null;
  }
  return this.getRandomBook().author;
}

// Book Listing

// var gBookOne = new Book( {
//   title : "IT",
//   author : "Stephen King",
//   numberOfPages: "330",
//   publishDate : "Janurary 12 1980"
// });
//
// var gBookTwo= new Book( {
//   title : "Life of PI",
//   author : "Yann Martel",
//   numberOfPages : "280",
//   publishDate : "September 12 2001"
// });
//
// var gBookThree = new Book( {
//   title : "Lord of the Flies",
//   author : "William Golding",
//   numberOfPages : "260",
//   publishDate : "August 12 1954"
// });




document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.book1 = new Book("IT", "Stephen King", 1138, "11-08-1983");
  window.book2 = new Book("For Whom The Bell Tolls", "Hemingway", 345, "01-25-1934");
  window.book3 = new Book("White Fang", "Jack London", 211, "11-08-1905");
  window.book4 = new Book("IT", "Stephen King", 1138, "11-08-1983");
  window.book5 = new Book("Life of Pi", "Yann Martel", 330, "09-08-2001");
  window.gLibrary.addBook(book1);
  window.gLibrary.addBook(book2);
  window.gLibrary.addBook(book3);
  window.gLibrary.addBook(book4);
  window.gLibrary.addBook(book5);
  window.gLibrary.removeBookByAuthor("Jack London");
  window.gLibrary.getRandomBook();
  window.gLibrary.getRandomAuthorName();
});
