import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

export const routes: Routes = [

    // Cambiamos el router component por el home component
    {path: '', component:HomeComponent, title:'Inicio' },
    {path:'clima', component:ClimaComponent, title:'API Clima' },
    {path:'peliculas', component:PeliculasComponent, title: 'API Peliculas' },

    {path: '**',redirectTo: '',pathMatch:'full' },

];
