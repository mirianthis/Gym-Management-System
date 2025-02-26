import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegistrationComponent } from './app/pages/registration/registration.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
