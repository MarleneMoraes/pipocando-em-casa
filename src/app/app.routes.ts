import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Featured } from './features/featured/featured';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'featured', component: Featured},
  {
    path: 'search/:query',
    loadComponent: () => import('./features/search/search').then(m => m.Search)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./features/movie-details/movie-details').then(m => m.MovieDetails)
  },
  { path: '**', redirectTo: '' }
];
