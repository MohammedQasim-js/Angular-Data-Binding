import { Book } from './book.model';
import { dataSource } from './dataSource.model';

export class BookRepository {
  private dataSource: dataSource;
  private books: Book[];

  constructor() {
    this.dataSource = new dataSource();
    this.books = new Array<Book>();
    // use the existing `Books` getter on dataSource (not a method named getBooks())
    this.dataSource.Books.forEach((b: Book) => this.books.push(b));
  }

  getBooks(): Book[] {
    return this.books;
  }
}
