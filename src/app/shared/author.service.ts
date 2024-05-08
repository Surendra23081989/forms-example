import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './Author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://localhost:7267/api/';
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseURL + 'Authors');
  }
  saveAuthor(author: Author) {
    return this.http.post(this.baseURL + 'saveAuthor', author);
  }
  updateAuthors(id: number, author: Author) {
    return this.http.put(this.baseURL + 'updateAuthor/' + id, author);
  }
  deleteAuthor(id: number) {
    return this.http.delete(this.baseURL + 'deleteAuthor/' + id);
  }
}
