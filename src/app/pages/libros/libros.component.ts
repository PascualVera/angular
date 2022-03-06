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
    this.libros = this.librosService.getAll();
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
        bookId.value,
        userId.value,
        title.value,
        type.value,
        author.value,
        price.value,
        photo.value,
        sinopsis.value
      );

      verified.value = 'Libro añadido ';
      verified.style.color = 'green';
      this.librosService.add(book);
    } else {
      verified.value = 'Introduce todos los datos';
      verified.style.color = 'red';
    }
  }
  updateBook(
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
    let book = new Libro(
      bookId.value,
      userId.value,
      title.value,
      type.value,
      author.value,
      price.value,
      photo.value,
      sinopsis.value
    );
    this.librosService.update(book);
    verified.value = 'Libro añadido ';
    verified.style.color = 'green';
  }
  delete(idNumber) {
    this.librosService.delete(idNumber);
  }
  search(id) {
    this.libros = this.librosService.getAll();
    if (id.value != '') {
      for (const libro of this.libros) {
        if (libro.id_libro == id.value) {
          this.libros = [libro];
        }
      }
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
