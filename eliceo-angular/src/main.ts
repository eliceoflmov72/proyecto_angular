import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app.routes'
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
       
        importProvidersFrom(BrowserModule, FormsModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
        

    ]
})
  .catch(err => console.error(err));

