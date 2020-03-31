import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private articleHeaderUrl = 'assets/articles/article_header.json';
  public posts: Post[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPosts().subscribe(data => {
      this.posts = data.Posts as Post[];
    });
  }

  public getPosts(): Observable<any> {
    return this.http.get<any[]>(this.articleHeaderUrl);
  }

  // public onSelect(post: Post) {
  //   console.log(`CLicking on ${post.Id}`);
  // }

}
