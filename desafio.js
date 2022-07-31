const { v4: uuidv4 } = require('uuid');

class book {
    constructor(title,  description, author) {
      this.title = title;
      this.description = description;
      this.author = author;
      
    };

    addId(id){
        this.id = id;
    };
  };

  class library{
    constructor(){
        this.books = []
    };

    addBook(book){
        const id = uuidv4()
        book.addId(id)
        this.books.push(book)
        return book

    };

    getBooks(){
        return this.books;
    };

    removeBookById(id){
        let idx = 0
        let deletedBook;
        let findBook = true;
        while(findBook){
            if(id === this.books[idx].id){
                findBook=false;
                deletedBook = this.books[idx];
                this.books.splice(idx,1);
                return deletedBook
            };
            idx += 1;
            if(idx >= this.books.length){
                findBook = false;
            }
        };
        console.log("Livro não encontrado!");
        return null;
    };

    getBookById(id){
        let idx = 0
        let findBook = true;
        while(findBook){
            if(id === this.books[idx].id){
                findBook=false;
                return this.books[idx];
            };
            idx += 1;
            if(idx >= this.books.length){
                findBook = false;
            }
        };
        console.log("Livro não encontrado!");
        return null;
    };

    updateBookById(id, info){
        let idx = 0;
        let findBook = true;
        while(findBook){
            if(id === this.books[idx].id){
                findBook=false;
                this.books[idx].title = info.title;
                this.books[idx].description = info.description;
                this.books[idx].author = info.author;
                return this.books[idx];
            };
            idx += 1;
            if(idx >= this.books.length){
                findBook = false;
            }
        };
        console.log("Livro não encontrado!");
        return null;
    };

  };



const livro1 = new book("Fernando","Teste","Davi");
const livro2 = new book("Marcelo","Teste","Davi");
const livro3 = new book("Maria","Teste","Davi");

const biblioteca = new library()


biblioteca.addBook(livro1)
const teste = biblioteca.addBook(livro2)
biblioteca.addBook(livro3)
biblioteca.getBooks();
console.log("add");
info = {title:"Maria",description: "Teste",author: "Davi"}
console.log(biblioteca.updateBookById(teste.id,info));
console.log(biblioteca.getBookById(teste.id));
