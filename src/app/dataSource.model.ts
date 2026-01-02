import { Book } from './book.model';

export class dataSource {
  private books: Book[];

  constructor() {
    this.books = new Array<Book>(
      new Book(1, 'Attack on Titan', 'Hajime Isayama', 299),
      new Book(2, 'Solo Leveling', 'Chugong', 199),
      new Book(3, 'Dr. Stone', 'Riichiro Inagaki', 99)
    );
  }

  get Books(): Book[] {
    return this.books;
  }
}
