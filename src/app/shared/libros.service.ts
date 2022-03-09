import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros;
  public book: Libro;
  private url = 'http://localhost:3000/libros';
  constructor(private http: HttpClient) {
    this.libros;
  }
  getAll(): Observable<object> {
    return this.http.get(this.url);
  }
  getOne(id_libro: string): Observable<Object> {
    return this.http.get(this.url + '?id=' + id_libro);
  }
  add(libro: Libro): Observable<Object> {
    return this.http.post(this.url, libro);
  }
  update(libro: Libro) {
    return this.http.put(this.url, libro);
  }
  delete(idNumber: string) {
    return this.http.delete(this.url + '?id=' + idNumber);
  }
}
