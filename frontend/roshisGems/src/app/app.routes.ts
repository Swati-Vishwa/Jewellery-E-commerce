import { Routes } from '@angular/router';
import { Store } from './pages/store/store';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {path: "", component: Home},
  { path: "store/:type", component: Store},
];
