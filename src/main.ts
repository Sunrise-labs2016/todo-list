import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MyApp } from './app/app';

bootstrapApplication(MyApp, appConfig).catch((err) => console.error(err));
