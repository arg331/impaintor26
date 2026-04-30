import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MatchmakingComponent } from './features/matchmaking/matchmaking.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'matchmaking', component: MatchmakingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Rutas futuras (CLAUDE.md §8.1):
  // { path: 'login',           loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
  // { path: 'register',        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
  // { path: 'profile',         loadComponent: () => ... },
  // { path: 'room/create',     loadComponent: () => ... },
  // { path: 'matchmaking',     loadComponent: () => ... },
  { path: '**', redirectTo: 'home' },
];
