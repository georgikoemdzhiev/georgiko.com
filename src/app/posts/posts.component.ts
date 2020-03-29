import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private articleHeaderUrl = 'assets/articles/article_header.json';
  public articles: Article[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getArticles().subscribe(data => {
      this.articles = data.Articles as Article[];
    });
  }

  public getArticles(): Observable<any> {
    return this.http.get<any[]>(this.articleHeaderUrl);
  }

  public onSelect(article: Article) {
    console.log("CLicking..");
  }

}
