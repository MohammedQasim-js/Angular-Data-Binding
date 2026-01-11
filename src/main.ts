import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BookComponent } from './app/book';

bootstrapApplication(BookComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
