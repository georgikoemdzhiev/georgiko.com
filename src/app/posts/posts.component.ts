import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.Posts as Post[];
    });
  }
}
