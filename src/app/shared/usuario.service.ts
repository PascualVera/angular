
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
private url: string
public usuario:Usuario
public logueado:boolean
  constructor(private http: HttpClient, private router: Router) {
    this.logueado = false; 
    ;
  }
  register(usuario: Usuario) {
    this.url = 'http://localhost:3000/registro'
    console.log(this.url)
    this.http.post(this.url,usuario).subscribe()
    
  }  
  login(usuario: Usuario) {
    this.url = 'http://localhost:3000/login';
    console.log(this.logueado)
    return this.http.post(this.url,usuario)
    
  }
 
}

