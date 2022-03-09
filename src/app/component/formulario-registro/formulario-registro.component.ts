import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  public usuario : Usuario
  constructor(public usuarioService:UsuarioService) { }
    registrar(foto,nombre,apellidos,correo,password,passCheck,verified){
      if(password.value == passCheck.value && password.value != ''){
        
        let user = new Usuario(nombre.value,apellidos.value,correo.value,foto.value,password.value)
        console.log(user)
        this.usuarioService.register(user)
        
      }else {
        verified.value = 'Contraseña no coincide'
        verified.style.display = 'block'
      }
    }
  ngOnInit(): void {
  }

}
