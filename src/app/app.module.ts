import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DatosPerfilComponent } from './component/datos-perfil/datos-perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { BookIdPipe } from './pipes/book-id.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './component/loginform/loginform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    DatosPerfilComponent,
    LibrosComponent,
    BookIdPipe,
    LoginComponent,
    LoginformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
