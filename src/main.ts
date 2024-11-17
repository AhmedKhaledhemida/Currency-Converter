import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FF1Component } from './app/ff-1/ff-1.component';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  
  bootstrapApplication(FF1Component, {
    providers: [
      provideRouter(routes),
      importProvidersFrom(HttpClientModule, FormsModule), // Include required modules
    ],
  });