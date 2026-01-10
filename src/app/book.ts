import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { BookRepository } from './repository.model';
import { Book } from './book.model';
import { CustomPipe } from './custom.pipe';
import { ForEmail } from './for-email';

@Component({
  selector: 'app-book',
  imports: [CommonModule, FormsModule, CustomPipe, ForEmail],
  templateUrl: './book.html',
  styleUrls: ['./book.css'],
})

// Data Binding
// export class BookComponent {
//   name1: string = 'Angular Pipes';
//   price: number = 299.99667;
//   today: number = Date.now();

//   description: string =
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis enim animi minima incidunt ratione corporis nulla tempora dolor similique.';

//   model: BookRepository = new BookRepository();

//   book: Book | undefined = this.model.getBooksId(1);

//   disabled = false;

//   getClassBinding(id: number): string {
//     let book = this.model.getBooksId(id);
//     return ((book?.price ?? 0) >= 299 ? 'bg-primary' : 'bg-info') + ' m-3';
//   }

//   getClassObject(id: number): object {
//     let book = this.model.getBooksId(id);
//     return {
//       'bg-primary': (book?.price ?? 0) >= 299,
//       'bg-info': (book?.price ?? 0) < 299,
//       'text-white': book?.name == 'Attack on Titan',
//     };
//   }

//   color: string = (this.model.getBooksId(1)?.price ?? 0) >= 299 ? 'green' : 'yellow';

//   getStyleBinding(id: number): Object {
//     let book = this.model.getBooksId(id);
//     return {
//       fontSize: '40px',
//       color: 'yellow',
//     };
//   }

//   onClick($event: any) {
//     $event.stopPropagation(); // Prevent event bubbling
//     console.log('Button was clicked!');
//     console.log(event);
//   }

//   onClickDiv() {
//     console.log('Div was clicked!');
//   }

//   // onKeyUp($event: any) {
//   //   if ($event.keyCode === 13) {
//   //     console.log('Pressed enter key!');
//   //   }
//   // }
//   // onKeyUp($event: any) {
//   //   console.log($event.target.value);
//   // }

//   name: string = 'John';

//   onKeyUp() {
//     console.log(this.name);
//   }
// }
export class BookComponent {
  model: BookRepository = new BookRepository();

  newBook: Book = new Book();
  get jsonBook() {
    return JSON.stringify(this.newBook);
  }

  addBook(b: Book) {
    console.log('New Book is ' + this.jsonBook);
  }

  getFormValitdationErrors(form: NgForm): string[] {
    let messages: string[] = [];

    Object.keys(form.controls).forEach((x) => {
      console.log(x);
      console.log(form.controls[x]);

      this.getValidationErrors(form.controls[x], x).forEach((message) => messages.push(message));
    });

    return messages;
  }

  getValidationErrors(model: any, key: string) {
    let ctrlName: string = model.name || key;
    let messages: string[] = [];

    if (model.errors) {
      for (let errorName in model.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${ctrlName}.`);
            break;
          case 'minlength':
            messages.push('You must enter at least 3 characters.');
            break;
        }
      }
    }
    return messages;
  }

  formSubmit: boolean = false;

  submitForm(form: NgForm) {
    // console.log(form);
    this.formSubmit = true;
    if (form.valid) {
      this.addBook(this.newBook);
      this.newBook = new Book();
      form.reset();
      this.formSubmit = false;
    }
  }

  // log(model: any) {
  //   console.log(model);
  // }

  // For Directive section
  // bookName: string | undefined = this.model.getBooksId(1)?.name;
  // addBook() {
  //   this.model.addBook(new Book(4, 'Omniscient Reader Viewpoint', 'singNsong', 399));
  // }
  // deleteBook(book: Book) {
  //   this.model.deleteBook(book);
  // }
  // updateBook(book: Book) {
  //   book.name = 'Updated';
  // }
}
