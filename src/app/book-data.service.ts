import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL= 'https://668d5968099db4c579f2ad17.mockapi.io/books'; 
@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(URL)
              .pipe( tap((books: Book[]) => books.forEach(book => book.quantity=0)));
  }
}
