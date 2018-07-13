var Book = function(args){
   this.Title = args.Title;
   this.Author = args.Author;
   this.Pages = args.Pages;
   this.Published = new Date(args.Published);
   this.Rating = args.Rating;
   this.Synopsis = args.Synopsis;
 };

//if(cover === 64 base encoding)


  var gBook1 = new Book( {
    Title : "IT",
    Author : "Stephen King",
    Pages: 1138,
    Published : "1980",
    Rating: "3 Stars",
    Synopsis: "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 18th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an entity that exploits the fears and phobias of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of a clown to attract its preferred prey of young children.",
  });

  var gBook2= new Book( {
    Title : "Life of PI",
    Author : "Yann Martel",
    Pages : 280,
    Published : "2001",
    Rating: "4 Stars",
    Synopsis: "Life of Pi is a Canadian fantasy adventure novel by Yann Martel published in 2001. The protagonist is Piscine Molitor 'Pi' Patel, an Indian boy from Pondicherry who explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger named Richard Parker.",
  });

  var  gBook3 = new Book( {
    Title : "Lord of the Flies",
    Author : "William Golding",
    Pages : 260,
    Published : "1954",
    Rating: "4 Stars",
    Synopsis: "Lord of the Flies is a 1954 novel by Nobel Prize–winning British author William Golding. The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.",
  });

  var gBook4= new Book ({
    Title : "For Whom The Bell Tolls",
    Author : "Ernest Hemingway",
    Pages : 320,
    Published : "1950",
    Rating: "4 Stars",
    Synopsis: "For Whom the Bell Tolls is a novel by Ernest Hemingway published in 1940. It tells the story of Robert Jordan, a young American in the International Brigades attached to a republican guerrilla unit during the Spanish Civil War. As a dynamiter, he is assigned to blow up a bridge during an attack on the city of Segovia.",
  });

  var gBook5= new Book ({
    Title : "2001 A Space Odyssey",
    Author : "Authur C. Clarke ",
    Pages : 221,
    Published : "1969",
    Rating: "4 Stars",
    Synopsis: "2001: A Space Odyssey is a 1968 science fiction novel by British writer Arthur C. Clarke. It was developed concurrently with Stanley Kubrick's film version and published after the release of the film. Clarke and Kubrick worked on the book together, but eventually only Clarke ended up as the official author. The story is based in part on various short stories by Clarke"
  });

  var gBook6= new Book ({
    Title : "The Grapes Of Wrath",
    Author : "John Steinbeck ",
    Pages : 275,
    Published : "1939",
    Rating: "4 Stars",
    Synopsis: "The Grapes of Wrath is an American realist novel. Set during the Great Depression, the novel focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home by drought, economic hardship, agricultural industry changes, and bank foreclosures forcing tenant farmers out of work. Due to their nearly hopeless situation, and in part because they are trapped in the Dust Bowl, the Joads set out for California. Along with thousands of other 'Okies', they seek jobs, land, dignity, and a future.",
  });

  var gBook7= new Book ({
    Title : "Of Mice and Men",
    Author : "John Steinbeck ",
    Pages : 195,
    Published: "1937",
    Rating: "4 Stars",
    Synopsis: "Of Mice and Men is a novella written by author John Steinbeck. Published in 1937, it tells the story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States."
  });

  var gBook8= new Book ({
    Title : "A Friend Of The Earth",
    Author : "T. C. Boyle ",
    Pages : 290,
    Published : "2000",
    Rating: "4 Stars",
    Synopsis: "A Friend of the Earth is a 2000 novel by T. Coraghessan Boyle. The novel is a story of environmental destruction set in 2025; as a result of global warming and the greenhouse effect, the climate has drastically changed, and, accordingly, biodiversity is a thing of the past.",
  });

  var gBook9= new Book ({
    Title : "Drop City",
    Author : "T. C. Boyle ",
    Pages : 310,
    Published : "2003",
    Rating: "4 Stars",
    Synopsis: "Drop City is a 2003 novel by American author T. Coraghessan Boyle. The novel, set in 1970, describes the social evolution of a group of counter-cultural free spirits, not unlike the inhabitants of the real Drop City community in Colorado, from which the novel apparently takes its name.",
  });

  var gBook10= new Book ({
    Title : "The Tortilla Curtain",
    Author : "T. C. Boyle ",
    Pages : 366,
    Published : "1995",
    Rating: "4 Stars",
    Synopsis: "The Tortilla Curtain (1995) is a novel by U.S. author T.C. Boyle about middle-class values, illegal immigration, xenophobia, poverty, and environmental destruction. In 1997 it was awarded the French Prix Médicis Étranger prize for best foreign novel.",
  });

  var gBook11= new Book ({
    Title : "The Great Gatsby",
    Author : "F Scott Fitzgerald ",
    Pages : 366,
    Published : "1925",
    Rating: "4 Stars",
    Synopsis: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West and East Egg on prosperous Long Island in the summer of 1922.",
  });

  var gBook12= new Book ({
    Title : "Moby Dick",
    Author : "Herman Melville ",
    Pages : 896,
    Published : "1851",
    Rating: "4 Stars",
    Synopsis: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the white whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
  });

  var addBooksArray = [ gBook5, gBook6, gBook7, gBook8, gBook9, gBook10, gBook11, gBook12];
