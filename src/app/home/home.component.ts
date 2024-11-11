import { Component } from '@angular/core';
import { faHtml5, faCss3, faJs, faAngular, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  //Iconos
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faAngular = faAngular;
  faLinkedin = faLinkedin;

  constructor(
    title: Title,

  ) {
    // Nombre de la pagina 
    title.setTitle("Inicio | Noé Solís");
  }
}