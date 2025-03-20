import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'services', 
    loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'booking', 
    loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'get-quote', 
    loadComponent: () => import('./components/get-quote/get-quote.component').then(m => m.GetQuoteComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]; 