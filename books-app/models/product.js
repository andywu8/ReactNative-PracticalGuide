class Product {
  constructor(id, ownerId, title, author, genre, imageUrl, description, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.price = price;
  }
}

export default Product;
