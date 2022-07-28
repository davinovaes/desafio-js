class book {
    constructor(title,  description, author) {
      this.title = title;
      this.description = description;
      this.author = author
    }
  };

  class library{
    constructor(){
        this.books = []

    };

    addBook(book){
        this.books.push(book)
        return book

    };

    getBooks(){
        //this.books.forEach(function (item, indice) {
        //    console.log(indice, item.title, item.description, item.author);
        //  });
        return this.books
    };

    removeBookById(id){
        this.books.splice(id,1)
    };

    getBookById(id){
        return this.books[id]
    };

    updateBookById(id){
        return None
    };

  };



const livro1 = new book("Fernando","Teste","Davi");
const livro2 = new book("Marcelo","Teste","Davi");
const livro3 = new book("Maria","Teste","Davi");

const biblioteca = new library()

biblioteca.addBook(livro1)
biblioteca.addBook(livro2)
biblioteca.addBook(livro3)
console.log(biblioteca.getBooks())
console.log(biblioteca.getBookById(0))
console.log(biblioteca.getBookById(1))
console.log(biblioteca.getBookById(2))
console.log(biblioteca.removeBookById(1))
console.log(biblioteca.getBookById(0))
console.log(biblioteca.getBookById(1))
