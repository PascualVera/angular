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
    librosService.getAll().subscribe((data: Libro[]) => {
      this.libros = data;
      console.log(data);
    });
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
      console.log(book);
      verified.value = 'Libro añadido ';
      verified.style.color = 'green';
      this.librosService.add(book).subscribe((data: Libro) => {
        console.log(data[0]);
        this.libros.push(data[0]);
      });
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
    this.librosService.getOne(bookId.value).subscribe((data: Libro[]) => {
      console.log(data);
      let book = data[0];
      if (userId.value != '') {
        book.id_usuario = userId.value;
      }
      if (title.value != '') {
        book.titulo = title.value;
      }
      if (type.value != '') {
        book.tipoLibro = type.value;
      }
      if (author.value != '') {
        book.autor = author.value;
      }
      if (price.value != '') {
        book.precio = price.value;
      }
      if (photo.value != '') {
        book.photo = photo.value;
      }
      if (sinopsis.value != '') {
        book.sinopsis = sinopsis.value;
      }
      this.librosService.update(book).subscribe((data) => {
        console.log(data);
        verified.value = 'Libro modificado';
        verified.style.color = 'green';
        this.librosService.getAll().subscribe((data: Libro[]) => {
          this.libros = data;
        });
      });
    });
  }
  delete(idNumber) {
    this.librosService.delete(idNumber).subscribe((data) => {
      console.log(data);
      this.librosService.getAll().subscribe((data: Libro[]) => {
        this.libros = data;
      });
    });
  }
  search(id) {
    this.librosService.getAll().subscribe((data: Libro[]) => {
      this.libros = data;
      if (id.value != '') {
        let bookFiltered = this.libros.filter((val) => {
          return val.id_libro == id.value;
        });
        this.libros = bookFiltered;
        console.log(this.libros);
      }
    });
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
