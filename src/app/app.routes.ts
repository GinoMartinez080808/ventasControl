import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductsComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'ordenes',
    component: OrdersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  //ruta por defecto
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];