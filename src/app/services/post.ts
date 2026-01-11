import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../post/post';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>(this.url).pipe(catchError(this.handleError));
  }

  createPost(post: Post) {
    return this.http.post<Post>(this.url, post);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(`${this.url}/${post.id}`, post);
  }

  deletePost(post: Post) {
    return this.http.delete<void>(`${this.url}/${post.id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client Error
      console.log('client error: ' + error.error.message);
    } else {
      // backend error
      console.log(`backend error:status code:${error.status} error:${error.error}`);
    }
    return throwError('Unknown Error!');
  }
}
