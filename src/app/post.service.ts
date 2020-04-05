import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postHeaderUrl = 'assets/posts/posts_header.json';

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<string> {
    return this.http.get(`/assets/posts/${id}/${id}.html`, {
      responseType: 'text'
    }) as Observable<string>;
  }

  getPosts(): Observable<any> {
    return this.http.get<any[]>(this.postHeaderUrl);
  }
}
