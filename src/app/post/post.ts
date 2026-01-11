import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post';

export interface Post {
  id?: number;
  title: string;
}

@Component({
  selector: 'post',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './post.html',
  styleUrls: ['./post.css'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  error: any;

  constructor(private postService: PostService) {
    // this.http.get<Post[]>(this.url).subscribe((response) => {
    //   console.log(response);
    //   this.posts = response;
    // });
    // this.postService.getPosts().subscribe((response) => {
    //   console.log(response);
    //   this.posts = response;
    // });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => (this.error = error)
    );
  }

  updatePost(post: Post) {
    post.title = 'updated';
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'updated' }))
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    this.postService.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: Post) {
    // this.http.delete(this.url + '/' + post.id)
    this.postService.deletePost(post).subscribe(
      (response) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error) => (this.error = error)
    );
  }

  createPost(input: HTMLInputElement) {
    const post: Post = { title: input.value };
    input.value = '';
    this.postService.createPost(post).subscribe((createdPost) => {
      this.posts.unshift(createdPost);
      console.log(createdPost);
    });
  }
}
