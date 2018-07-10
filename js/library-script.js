//Not Singleton
var Library = function(){

  }

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
//Put in new file below
// var Book = function(args){
//    this.bookTitle = args.bookTitle;
//    this.author = args.author;
//    this.numberOfPages = args.numberOfPages;
//    this.publishDate = new Date(args.publishDate);
//   }

Library.prototype.addBook = function(book) {
  // Purpose: Add a book object to your books array.
  // Return:boolean true if it is not already added, false if it is already added.
   this.hasBooks = false;
   for ( var i=0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].bookTitle === book.bookTitle) {
        console.log("Book title has already been added.");
        return this.hasBooks;
        }
      }
    window.bookShelf.push(book);
    this.setLocalStorage();
    return this.hasBooks=true;
  };

Library.prototype.removeBookTitle = function(titleToRemove){
  // Purpose: Remove book from from the books array by its title.
  // Return:boolean true if the book(s) were removed, false if no books match
  var remTitleArray = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
     if (window.bookShelf[i].bookTitle.toLowerCase().search(titleToRemove.toLowerCase())> -1) {
       window.bookShelf.splice(i,1);
       localStorage.setItem('book', JSON.stringify(window.bookShelf));
       console.log("Title" + titleToRemove + "has been removed.");
       remTitleArray.push(window.bookShelf[i]);
       i--;
       }
     }
     if (remTitleArray.length > 0) {
      return true;
    } else {
        console.log("Book title is not in library.");
        return false;
      }
 };

Library.prototype.removeBookByAuthor = function(authorName){
// // Purpose: Remove a specific book from your books array by the author name.
// // Return: booleantrue if the book(s) were removed, false if no books match.
  var remBookAuthArray = [];
  for ( var i=0; i < window.bookShelf.length; i++) {
    if (window.bookShelf[i].author.toLowerCase().search(authorName.toLowerCase())> -1) {
      remBookAuthArray.push(window.bookShelf[i]);
      window.bookShelf.splice(i,1);
      i--;
      localStorage.setItem('book', JSON.stringify(window.bookShelf));
      }
    }
    if (remBookAuthArray.length > 0) {
        return true;
      } else {
    console.log("This Author is not in library.");
    return false;
  }
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
      if (window.bookShelf[i].bookTitle.toLowerCase().search(titleString.toLowerCase())> -1) {
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
      if (window.bookShelf[i].author.toLowerCase().search(authorString.toLowerCase())> -1) {
       booksByAuthor.push(window.bookShelf[i]);
       }
     }
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
      allAuthors.push(window.bookShelf[i].author);
    }
    // allAuthorsNoDup = this.removeDuplicates(allAuthors);
    // return allAuthorsNoDup;
    // return this.removeDuplicates(allAuthors);

    return allAuthors;
};

Library.prototype.getRandomAuthorName = function() {
 // Purpose: Retrieves a random author name from your books collection
 // Return: string author name, null if no books exist
  if (window.bookShelf.length === 0) {
    return null;
  }
  return this.getRandomBook().author;
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
  var getBooks = JSON.parse(localStorage.getItem("book"));
   for (var i=0; i < getBooks.length; i++ ) {
     var bookFromStorage = new Book ({
        bookTitle : getBooks[i].bookTitle,
        author : getBooks[i].author,
        numberOfPages : getBooks[i].numberOfPages,
        publishDate : new Date(getBooks[i].publishDate),
      });
      window.bookShelf.push(bookFromStorage);
    }
   return true;
};

Library.prototype.searchBooks = function (searchString) {

    var searchResult = [];
    var titleResult = [];
    var authorResult = [];

    for ( var i=0; i < window.bookShelf.length; i++) {

      if (window.bookShelf[i].bookTitle.toLowerCase().search(searchString.toLowerCase()) > -1 || window.bookShelf[i].author.toLowerCase().search(searchString.toLowerCase())>-1){
          titleResult = this.getBookByTitle(searchString);
          authorResult = this.getBooksByAuthor(searchString);
          searchResult = titleResult.concat(authorResult);
        }
        else if (parseInt(searchString) === window.bookShelf[i].numberOfPages || Date.parse(parseInt(searchString)) === Date.parse(window.bookShelf[i].publishDate)){
           searchResult.push(window.bookShelf[i]);
        }
      }
  return searchResult;
};

// multiple Book Listing

// var gBook1 = new Book( {
//   bookTitle : "IT",
//   author : "Stephen King",
//   numberOfPages: 1138,
//   publishDate : "1980"
// });
//
// var gBook2= new Book( {
//   bookTitle : "Life of PI",
//   author : "Yann Martel",
//   numberOfPages : 280,
//   publishDate : "2001"
// });
//
// var  gBook3 = new Book( {
//   bookTitle : "Lord of the Flies",
//   author : "William Golding",
//   numberOfPages : 260,
//   publishDate : "1954"
// });
//
// var gBook4= new Book ({
//   bookTitle : "For Whom The Bell Tolls",
//   author : "Ernest Hemingway",
//   numberOfPages : 320,
//   publishDate : "1950"
// });
//
// var gBook5= new Book ({
//   bookTitle : "2001 A Space Odyssey",
//   author : "Authur C. Clarke ",
//   numberOfPages : 221,
//   publishDate : "1969"
// });
//
// var gBook6= new Book ({
//   bookTitle : "The Grapes Of Wrath",
//   author : "John Steinbeck ",
//   numberOfPages : 275,
//   publishDate : "1939"
// });
//
// var gBook7= new Book ({
//   bookTitle : "Of Mice and Men",
//   author : "John Steinbeck ",
//   numberOfPages : 195,
//   publishDate : "1937"
// });
//
// var gBook8= new Book ({
//   bookTitle : "A Friend Of The Earth",
//   author : "T. C. Boyle ",
//   numberOfPages : 290,
//   publishDate : "2000"
// });
//
// var gBook9= new Book ({
//   bookTitle : "Drop City",
//   author : "T C Boyle ",
//   numberOfPages : 310,
//   publishDate : "2003"
// });
//
// var gBook10= new Book ({
//   bookTitle : "The Tortilla Curtain",
//   author : "T C Boyle ",
//   numberOfPages : 366,
//   publishDate : "1995"
// });
//
// var gBook11= new Book ({
//   bookTitle : "The Great Gatsby",
//   author : "F Scott Fitzgerald ",
//   numberOfPages : 366,
//   publishDate : "1925"
// });
//
// var gBook12= new Book ({
//   bookTitle : "Moby Dick",
//   author : "Herman Melville ",
//   numberOfPages : 896,
//   publishDate : "1851"
// });
//
// var addBooksArray = [ gBook5, gBook6, gBook7, gBook8, gBook9, gBook10, gBook11, gBook12];

// $(document).ready( function() {
//     	$(document).on('change', '.btn-file :file', function() {
// 		var input = $(this),
// 			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
// 		input.trigger('fileselect', [label]);
// 		});
//
// 		$('.btn-file :file').on('fileselect', function(event, label) {
//
// 		    var input = $(this).parents('.input-group').find(':text'),
// 		        log = label;
//
// 		    if( input.length ) {
// 		        input.val(log);
// 		    } else {
// 		        if( log ) alert(log);
// 		    }
//
// 		});
// 		function readURL(input) {
// 		    if (input.files && input.files[0]) {
// 		        var reader = new FileReader();
//
// 		        reader.onload = function (e) {
// 		            $('#img-upload').attr('src', e.target.result);
// 		        }
//
// 		        reader.readAsDataURL(input.files[0]);
// 		    }
// 		}
//
// 		$("#imgInp").change(function(){
// 		    readURL(this);
// 		});
// 	});

var gLibrary = new Library();
// document.addEventListener("DOMContentLoaded", function() {
 //window.gLibrary = new Library();
  // window.gLibrary2 = new Library();
  // window.gLibrary.addBooks(addBooksArray);
  // window.gLibrary.addBook(gBook1);
  // window.gLibrary.addBook(gBook2);
  // window.gLibrary.addBook(gBook3);
  // window.gLibrary.addBook(gBook4);
  // // window.gLibrary.removeBookByAuthor("Boyle");
  // // window.gLibrary.getRandomBook();
  // // window.gLibrary.getRandomAuthorName();
  // // window.gLibrary.getBookByTitle("x");
  // window.gLibrary.getBooksByAuthor("Boyle");
  // // window.gLibrary.getAuthors();
  // window.gLibrary.searchBooks("2001");
 // });
