import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GestionEstudiantesServiceService } from './gestion-estudiantes/gestion-estudiantes-service.service';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
     multi: true },
     provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes),provideHttpClient()]
};
