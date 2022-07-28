const { v4: uuidv4 } = require('uuid');

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
        const id = uuidv4()
        this.books.push([id,book])
        return book

    };

    getBooks(){
        const lista = []
        for (const item in this.books){
            lista.push(item[1])
            console.log(item[1]);
        };
        console.log(lista);
        return lista;
    };

    removeBookById(id){
        
        for (let item in this.books){
            
        };
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
biblioteca.getBooks();
