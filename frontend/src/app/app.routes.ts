import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MatchmakingComponent } from './features/matchmaking/matchmaking.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'matchmaking', component: MatchmakingComponent },
  { path: 'room/:code/lobby', loadComponent: () => import('./features/room/lobby/lobby').then(m => m.Lobby) },
  { path: 'room/:code/game',  loadComponent: () => import('./features/room/game/game').then(m => m.Game) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Rutas futuras (CLAUDE.md §8.1):
  // { path: 'login',           loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
  // { path: 'register',        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
  // { path: 'profile',         loadComponent: () => ... },
  // { path: 'room/create',     loadComponent: () => ... },
  // { path: 'matchmaking',     loadComponent: () => ... },
  { path: '**', redirectTo: 'home' },
];
