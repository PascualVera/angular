import { Component, OnInit } from '@angular/core';

import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  public libros: Libro[];
  public book: Libro;
  constructor(public librosService: LibrosService) {
    this.libros = [];
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
  changeToAdd(add, update, btnUpd, btnAdd) {
    add.style.display = 'flex';
    update.style.display = 'none';
    btnUpd.style.cssText += `
    box-shadow: 1px -1px 5px 1px rgba(0, 0, 0, 0.582) inset;
    `;
    btnAdd.style.cssText += 'box-shadow: 0px 0px 0px 0px;';
  }
  changeToUpdate(add, update, btnUpd, btnAdd) {
    add.style.display = 'none';
    update.style.display = 'flex';
    btnUpd.style.cssText += `
      box-shadow: 0px 0px 0px 0px 
    `;
    btnAdd.style.cssText +=
      'box-shadow: -1px -1px 5px 1px rgba(0, 0, 0, 0.582) inset;';
  }

  ngOnInit(): void {}
}
