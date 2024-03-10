import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';

export const routes: Routes = [

    // Cambiamos el router component por el home component
    {path: '', component:HomeComponent},
    {path:'clima', component:ClimaComponent},
    {path:'adivinanza', component:AdivinanzaComponent},

    {path: '**',redirectTo: '',pathMatch:'full' },

];
