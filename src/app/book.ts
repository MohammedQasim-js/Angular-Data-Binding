import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookRepository } from './repository.model';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule],
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

  color: string = (this.model.getBooksId(1)?.price ?? 0) >= 299 ? 'green' : 'yellow';

  getStyleBinding(id: number): Object {
    let book = this.model.getBooksId(id);
    return {
      fontSize: '40px',
      color: 'yellow',
    };
  }

  onClick($event: any) {
    $event.stopPropagation(); // Prevent event bubbling
    console.log('Button was clicked!');
    console.log(event);
  }

  onClickDiv() {
    console.log('Div was clicked!');
  }

  // onKeyUp($event: any) {
  //   if ($event.keyCode === 13) {
  //     console.log('Pressed enter key!');
  //   }
  // }
  // onKeyUp($event: any) {
  //   console.log($event.target.value);
  // }

  name = 'John';

  onKeyUp() {
    console.log(this.name);
  }
}
