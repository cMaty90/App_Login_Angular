import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaComponent } from '../usuarios/bienvenida/bienvenida.component';
import { InicioSesionComponent } from '../usuarios/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from '../usuarios/registro-usuario/registro-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: InicioSesionComponent,
    pathMatch:'full'

  },
  {
    path: 'registro',
    component: RegistroUsuarioComponent
  },
  {
    path: 'bienvenido',
    component: BienvenidaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
