import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  constructor(
    title: Title,

  ) {
    // Nombre de la pagina 
    title.setTitle("Proyectos | Noé Solís");
  }
}
