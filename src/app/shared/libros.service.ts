import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { LibrosComponent } from '../pages/libros/libros.component';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[];
  public book: Libro;
  constructor() {
    this.libros = [
      new Libro(
        1,
        1,
        'El Ultimo Deseo',
        'Tapa dura',
        'Andrzej Sapkowski',
        15,
        'https://images-na.ssl-images-amazon.com/images/I/91GB9hUvdmL.jpg',
        `Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias`
      ),
      new Libro(
        2,
        2,
        'El Ultimo Deseo',
        'Tapa Dura',
        'Andrzej Sapkowski',
        15,
        'https://images-na.ssl-images-amazon.com/images/I/91GB9hUvdmL.jpg',
        `Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias`
      ),
      new Libro(
        3,
        3,
        'El Ultimo Deseo',
        'Tapa Dura',
        'Andrzej Sapkowski',
        15,
        'https://images-na.ssl-images-amazon.com/images/I/91GB9hUvdmL.jpg',
        `Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias`
      ),
    ];
  }
  getAll(): Libro[] {
    return this.libros;
  }
  getOne(id_libro: number): Libro {
    console.log(id_libro);
    for (let libro of this.libros) {
      if (libro.id_libro == id_libro) {
        return libro;
      }
    }
    return null;
  }
  add(libro: Libro) {
    this.libros.push(libro);
  }
  update(libro: Libro): boolean {
    for (let i = 0; i < this.libros.length; i++) {
      if (libro.id_libro == this.libros[i].id_libro) {
        this.libros[i] = libro;
        return true;
      }
    }
    return false;
  }
  delete(idNumber: number): boolean {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id_libro == idNumber) {
        this.libros.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
