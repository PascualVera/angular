import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[];
  constructor() {
    this.libros = [
      new Libro(
        'El Ultimo Deseo',
        'Tapa dura',
        'Andrzej Sapkowski',
        15,
        'https://images-na.ssl-images-amazon.com/images/I/91GB9hUvdmL.jpg',
        `Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias`
      ),
      new Libro(
        'El Ultimo Deseo',
        'Tapa Dura',
        'Andrzej Sapkowski',
        15,
        'https://images-na.ssl-images-amazon.com/images/I/91GB9hUvdmL.jpg',
        `Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias`
      ),
      new Libro(
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
    for (let libro of this.libros) {
      if (libro.id_libro == id_libro) {
        return libro;
      }
    }
    return null;
  }
  add(libro: Libro) {}
}
