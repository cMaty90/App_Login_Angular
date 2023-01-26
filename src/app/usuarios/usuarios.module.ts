import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginRoutingModule } from '../login-routing/login-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroUsuarioComponent,
    BienvenidaComponent
  ],
  exports: [
    InicioSesionComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsuariosModule { }
