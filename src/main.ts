import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './app/services/http.interceptor';
// import { HttpInterceptorService } from './services/http.interceptor';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provides HttpClient
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }, // Interceptor
    RouterModule
  ],
}).catch(err => console.error(err));


// src/main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { NewsListComponent } from './app/news-list/news-list.component';


// const routes = [
//   { path: '', component: NewsListComponent }, 
//   {
//     path: 'news/:id', 
//     loadComponent: () => import('./app/news-detail/news-detail.component').then(m => m.NewsDetailsComponent)
//   }, 
// ];

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     CommonModule, 
//   ]
// });




