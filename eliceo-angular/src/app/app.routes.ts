import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { WindowMethodsComponent } from './pages/window-methods/window-methods.component';

export const routes: Routes = [

    // Cambiamos el router component por el home component
    {path: '', component:HomeComponent},
    {path:'clima', component:ClimaComponent},
    {path:'adivinanza', component:AdivinanzaComponent, title: 'Adivina el número'},
    {path:'filtros', component:FiltrosComponent, title: 'Filtros de imágenes'},
    {path:'window-methods', component:WindowMethodsComponent, title: 'Window Methods'},

    {path: '**',redirectTo: '',pathMatch:'full' },

];
