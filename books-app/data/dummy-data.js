import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Lord of the Rings',
    'JRR Tolkien',
    'https://images-na.ssl-images-amazon.com/images/I/8134AkhQJgL.jpg',
    'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for',
    // 29.99
  ),
  new Product(
    'p2',
    'u1',
    'Harry Potter and the Sorcerer"s Stone',
    'JK Rowling',
    'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg',
    'The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old.',
    // 99.99
  ),
  new Product(
    'p3',
    'u2',
    'Game of Thrones',
    'George RR Martin',
    'https://i5.walmartimages.com/asr/ac2f5508-245a-4c14-9821-a06a324fe0a2_1.a9c312d32902c17f7786af968ce71867.jpeg',
    'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King\u2019s Landing. There Eddard Stark of Winterfell rules in Robert\u2019s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse\u2014unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.\r\n \r\nYet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen\u2019s brothers Jaime and Tyrion of the powerful and wealthy House Lannister\u2014the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms.\r\n \r\nMeanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki\u2014whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.',
    // 8.99
  ),
  new Product(
    'p4',
    'u3',
    'Ender"s Game',
    'Orson Scott Card',
    'https://images-na.ssl-images-amazon.com/images/I/51L10EnuJbL.jpg',
    "In order to develop a secure defense against a hostile alien race\'s next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew \"Ender\" Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn\'t make the cut--young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training.\r\n\r\nEnder\'s skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers, Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister.\r\n\r\nIs Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender\'s two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If the world survives, that is.\r\n\r\nWinner of the Hugo and Nebula Awards.",
    // 15.99
  ),
  new Product(
    'p5',
    'u3',
    'To Kill a Mockingbird',
    'Harper Lee',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
    'One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father\u2014a crusading local lawyer\u2014risks everything to defend a black man unjustly accused of a terrible crime.',
    // 2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Great Gatsby',
    'F. Scott Fitzgerald',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg/440px-The_Great_Gatsby_cover_1925_%281%29.jpg',
    "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
    // 5.49
  )
];

export default PRODUCTS;
