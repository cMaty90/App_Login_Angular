import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

constructor(private router:Router){}
  nombreDeUsuario: string = JSON.parse(localStorage.getItem('nombreUsuario') || 'no se encontro usuario');

  cerrarSesion() {
    localStorage.removeItem('nombreUsuario');
    this.router.navigate(['']);
  }
}
