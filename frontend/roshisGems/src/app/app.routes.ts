import { Routes } from '@angular/router';
import { Store } from './pages/store/store';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: "", component: Home, data: { headerVariant: 'default' } },
  { path: "store/:type", component: Store, data: { headerVariant: 'store' } },
];
