import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRepository } from './repository.model';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
})
export class BookComponent {
  model: BookRepository = new BookRepository();

  book: Book | undefined = this.model.getBooksId(1);

  disabled = false;

  getClassBinding(id: number): string {
    let book = this.model.getBooksId(id);
    return ((book?.price ?? 0) >= 299 ? 'bg-primary' : 'bg-info') + ' m-3';
  }

  getClassObject(id: number): object {
    let book = this.model.getBooksId(id);
    return {
      'bg-primary': (book?.price ?? 0) >= 299,
      'bg-info': (book?.price ?? 0) < 299,
      'text-white': book?.name == 'Attack on Titan',
    };
  }
}
