import { bootstrapApplication } from '@angular/platform-browser';
import { BookComponent } from './app/book';

bootstrapApplication(BookComponent).catch((err) => console.error(err));
