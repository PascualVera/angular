import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css'],
})
export class DatosPerfilComponent implements OnInit {
  public newUser: Usuario;
  constructor() {
    this.newUser = new Usuario(
      1,
      'Gandalf',
      'El Gris',
      'gandalf.994@yahoo.es',
      'www.lotr.com',
      'Contraseña'
    );
  }
  modify(
    name: HTMLInputElement,
    apellidos: HTMLInputElement,
    password: HTMLInputElement,
    url: HTMLInputElement,
    check:HTMLInputElement
  ) {
    let arr = [name.value, apellidos.value,password.value,url.value]
    let arrFilter = arr.filter(val=> val != '')
    if(arrFilter[0] === undefined){
      console.log('funciona')
      check.value = 'No se han detectado cambios'
      check.style.color = 'red'
    }else{
    this.newUser.nombre = name.value == '' ? this.newUser.nombre : name.value;
    this.newUser.apellidos = apellidos.value == '' ? this.newUser.apellidos : apellidos.value;
    this.newUser.password = password.value == '' ?this.newUser.password : password.value;
    this.newUser.url = url.value == '' ?this.newUser.url : url.value;
    check.value = 'Usuario actualizado'
    check.style.color = 'green'
  }
  }

  ngOnInit(): void {}
}
