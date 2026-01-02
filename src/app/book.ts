import { Component } from '@angular/core';
import { BookRepository } from './repository.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
})
export class BookComponent {
  model: BookRepository = new BookRepository();
}
