import { Book } from './book.model';
import { dataSource } from './dataSource.model';

export class BookRepository {
  private dataSource: dataSource;
  private books: Book[];

  constructor() {
    this.dataSource = new dataSource();
    this.books = new Array<Book>();
    this.dataSource.Books.forEach((b: Book) => this.books.push(b));
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBooksId(id: number): Book | undefined {
    return this.books.find((b) => b.id === id);
  }
}
