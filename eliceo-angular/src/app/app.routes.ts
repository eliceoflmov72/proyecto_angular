import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { githubComponent } from './pages/github/github.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { WindowMethodsComponent } from './pages/window-methods/window-methods.component';

export const routes: Routes = [

    // Cambiamos el router component por el home component
    {path: '', component:HomeComponent},
    {path:'adivinanza', component:AdivinanzaComponent, title: 'Adivina el número'},
    {path:'filtros', component:FiltrosComponent, title: 'Filtros de imágenes'},
    {path:'window-methods', component:WindowMethodsComponent, title: 'Window Methods'},
    {path: '', component:HomeComponent, title:'Inicio' },
    {path:'clima', component:ClimaComponent, title:'API Clima' },
    {path:'peliculas', component:PeliculasComponent, title: 'API Peliculas' },
    {path: 'nasa', component:NasaComponent, title: 'API Nasa' },
    {path: 'github', component:githubComponent, title: 'API GitHub' },
    {path: '**',redirectTo: '',pathMatch:'full' }

];
