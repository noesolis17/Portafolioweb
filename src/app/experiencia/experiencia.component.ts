import { Component } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  constructor(
    title: Title,

  ) {
    // Nombre de la pagina 
    title.setTitle("Experiencia | Noé Solís");
  }
}
