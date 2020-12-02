export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/71kPW3SLQSL.jpg",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 28,
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1515866451i/37927284._UY2700_SS2700_.jpg",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("something bad"));
    
        } else {
          resolve(this.data);
        }
          }, 700);
    });
  }
}
