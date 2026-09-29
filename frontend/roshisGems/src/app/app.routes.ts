import { Routes } from '@angular/router';
import { Store } from './pages/store/store';
import { Home } from './pages/home/home';
import { ViewProduct } from './pages/view-product/view-product';

export const routes: Routes = [
  { path: "", component: Home, data: { headerVariant: 'default' } },
  { path: "store/:type", component: Store, data: { headerVariant: 'store' } },
  { path: "productView/:productId", component: ViewProduct, data: { headerVariant: 'store'}}
];