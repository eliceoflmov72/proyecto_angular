import { Routes } from '@angular/router';

// Importamos los componentes que hemos creado.
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { githubComponent } from './pages/github/github.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { WindowMethodsComponent } from './pages/window-methods/window-methods.component';
import { AddTutorialComponent } from './pages/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './pages/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './pages/tutorials-list/tutorials-list.component';

export const routes: Routes = [

    // Cambiamos el path por el que queramos para la ruta principal de cada componente.
    {path: '', component:HomeComponent, title: 'Inicio'},
    {path: 'Adivinanza', component:AdivinanzaComponent, title: 'Adivina el número'},
    {path: 'Filtros', component:FiltrosComponent, title: 'Filtros de imágenes'},
    {path: 'Window Methods', component:WindowMethodsComponent, title: 'Window Methods'},
    {path: 'Clima', component:ClimaComponent, title:'API Clima' },
    {path: 'Peliculas', component:PeliculasComponent, title: 'API Peliculas' },
    {path: 'Nasa', component:NasaComponent, title: 'API Nasa' },
    {path: 'GitHub', component:githubComponent, title: 'API GitHub' },

    {path: 'Añadir nota', component:AddTutorialComponent, title: 'Añadir nota' },
    {path: 'tutorials/:id', component:TutorialDetailsComponent, title: 'Detalles' },
    {path: 'Listado de notas', component:TutorialsListComponent, title: 'Listado' },
    {path: '**',redirectTo: '',pathMatch:'full' }

];
