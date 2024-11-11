import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "experiencia", component: ExperienciaComponent},
    { path: "proyectos", component: ProyectosComponent},
];
