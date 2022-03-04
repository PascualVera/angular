import { Component, OnInit } from '@angular/core';

import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  public libros: Libro[];
  public book: Libro;
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
  addBook(
    bookId,
    userId,
    title,
    type,
    author,
    price,
    photo,
    sinopsis,
    verified
  ) {
    let arrValues = [
      bookId,
      userId,
      title,
      type,
      author,
      price,
      photo,
      sinopsis,
    ];
    let filterResults = arrValues.filter((val) => val.value != '');
    if (filterResults.length == 8) {
      let book = new Libro(
        title.value,
        type.value,
        author.value,
        price.value,
        photo.value,
        sinopsis.value
      );
      book.id_libro = bookId.value;
      book.id_usuario = userId.value;
      this.libros.push(book);
      verified.value = 'Libro añadido correctamente';
      verified.style.color = 'green';
    } else {
      verified.value = 'Introduce todos los datos';
      verified.style.color = 'red';
    }
  }

  ngOnInit(): void {}
}
