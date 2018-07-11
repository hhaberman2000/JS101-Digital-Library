var Book = function(args){
   this.bookTitle = args.bookTitle;
   this.author = args.author;
   this.numberOfPages = args.numberOfPages;
   this.publishDate = new Date(args.publishDate);
   this.rating = args.rating;
   this.synopsis = args.synopsis;

  }
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
    author : "Authur C. Clarke ",
    numberOfPages : 221,
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
    author : "T. C. Boyle ",
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
    bookTitle : "The Tortilla Curtain",
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

  var addBooksArray = [ gBook5, gBook6, gBook7, gBook8, gBook9, gBook10, gBook11, gBook12];
