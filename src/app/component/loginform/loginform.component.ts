import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public user:Usuario
  constructor(public usuarioService:UsuarioService,private router:Router) { }
  iniciarSesion(correo,contraseña){
    this.usuarioService.logueado = false
    this.usuarioService.login(new Usuario('','',correo.value,'',contraseña.value)).subscribe((data:[Usuario])=>{
      this.usuarioService.logueado = true
      this.usuarioService.usuario = data[0]
      this.router.navigate(['/libros'])
    })
    
  }
  ngOnInit(): void {
  }

}
