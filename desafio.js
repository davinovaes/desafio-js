class book {
    constructor(title, description, author) {
      this.title = title;
      this.description = description;
      this.author = author
    }
  }

  class library{
    constructor(){
        this.books = []

    }

    addBook(book){
        this.books.push(book)
    }

    getBooks(){
        console.log(this.books[0])
    }
  }


const name = ["Fernando","Teste","Davi"]
const livro = new book(name[0],name[1],name[2])
const biblioteca = new library()

biblioteca.addBook(livro)
biblioteca.getBooks()