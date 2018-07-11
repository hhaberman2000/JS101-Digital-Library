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
    publishDate : "1980",
    rating: "3 Stars",
    synopsis: "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 18th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an entity that exploits the fears and phobias of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of a clown to attract its preferred prey of young children.",
  });

  var gBook2= new Book( {
    bookTitle : "Life of PI",
    author : "Yann Martel",
    numberOfPages : 280,
    publishDate : "2001",
    rating: "4 Stars",
    synopsis: "Life of Pi is a Canadian fantasy adventure novel by Yann Martel published in 2001. The protagonist is Piscine Molitor 'Pi' Patel, an Indian boy from Pondicherry who explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger named Richard Parker.",
  });

  var  gBook3 = new Book( {
    bookTitle : "Lord of the Flies",
    author : "William Golding",
    numberOfPages : 260,
    publishDate : "1954",
    rating: "4 Stars",
    synopsis: "Lord of the Flies is a 1954 novel by Nobel Prize–winning British author William Golding. The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.",
  });

  var gBook4= new Book ({
    bookTitle : "For Whom The Bell Tolls",
    author : "Ernest Hemingway",
    numberOfPages : 320,
    publishDate : "1950",
    rating: "4 Stars",
    synopsis: "For Whom the Bell Tolls is a novel by Ernest Hemingway published in 1940. It tells the story of Robert Jordan, a young American in the International Brigades attached to a republican guerrilla unit during the Spanish Civil War. As a dynamiter, he is assigned to blow up a bridge during an attack on the city of Segovia.",
  });

  var gBook5= new Book ({
    bookTitle : "2001 A Space Odyssey",
    author : "Authur C. Clarke ",
    numberOfPages : 221,
    publishDate : "1969",
    rating: "4 Stars",
    synopsis: "2001: A Space Odyssey is a 1968 science fiction novel by British writer Arthur C. Clarke. It was developed concurrently with Stanley Kubrick's film version and published after the release of the film. Clarke and Kubrick worked on the book together, but eventually only Clarke ended up as the official author. The story is based in part on various short stories by Clarke"
  });

  var gBook6= new Book ({
    bookTitle : "The Grapes Of Wrath",
    author : "John Steinbeck ",
    numberOfPages : 275,
    publishDate : "1939",
    rating: "4 Stars",
    synopsis: "The Grapes of Wrath is an American realist novel. Set during the Great Depression, the novel focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home by drought, economic hardship, agricultural industry changes, and bank foreclosures forcing tenant farmers out of work. Due to their nearly hopeless situation, and in part because they are trapped in the Dust Bowl, the Joads set out for California. Along with thousands of other 'Okies', they seek jobs, land, dignity, and a future.",
  });

  var gBook7= new Book ({
    bookTitle : "Of Mice and Men",
    author : "John Steinbeck ",
    numberOfPages : 195,
    publishDate : "1937",
    rating: "4 Stars",
    synopsis: "Of Mice and Men is a novella written by author John Steinbeck. Published in 1937, it tells the story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States."
  });

  var gBook8= new Book ({
    bookTitle : "A Friend Of The Earth",
    author : "T. C. Boyle ",
    numberOfPages : 290,
    publishDate : "2000",
    rating: "4 Stars",
    synopsis: "A Friend of the Earth is a 2000 novel by T. Coraghessan Boyle. The novel is a story of environmental destruction set in 2025; as a result of global warming and the greenhouse effect, the climate has drastically changed, and, accordingly, biodiversity is a thing of the past.",
  });

  var gBook9= new Book ({
    bookTitle : "Drop City",
    author : "T. C. Boyle ",
    numberOfPages : 310,
    publishDate : "2003",
    rating: "4 Stars",
    synopsis: "Drop City is a 2003 novel by American author T. Coraghessan Boyle. The novel, set in 1970, describes the social evolution of a group of counter-cultural free spirits, not unlike the inhabitants of the real Drop City community in Colorado, from which the novel apparently takes its name.",
  });

  var gBook10= new Book ({
    bookTitle : "The Tortilla Curtain",
    author : "T. C. Boyle ",
    numberOfPages : 366,
    publishDate : "1995",
    rating: "4 Stars",
    synopsis: "The Tortilla Curtain (1995) is a novel by U.S. author T.C. Boyle about middle-class values, illegal immigration, xenophobia, poverty, and environmental destruction. In 1997 it was awarded the French Prix Médicis Étranger prize for best foreign novel.",
  });

  var gBook11= new Book ({
    bookTitle : "The Great Gatsby",
    author : "F Scott Fitzgerald ",
    numberOfPages : 366,
    publishDate : "1925",
    rating: "4 Stars",
    synopsis: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West and East Egg on prosperous Long Island in the summer of 1922.",
  });

  var gBook12= new Book ({
    bookTitle : "Moby Dick",
    author : "Herman Melville ",
    numberOfPages : 896,
    publishDate : "1851",
    rating: "4 Stars",
    synopsis: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the white whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
  });

  var addBooksArray = [ gBook5, gBook6, gBook7, gBook8, gBook9, gBook10, gBook11, gBook12];
