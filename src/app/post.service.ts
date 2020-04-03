import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<string> {
    return this.http.get(`/assets/articles/${id}.html`, {
      responseType: 'text'
    }) as Observable<string>;
  }
}
