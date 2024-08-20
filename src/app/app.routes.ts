import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutusComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductslistComponent , canActivate: [authGuard] },
    {path:'products/:id',component:ProductDetailComponentComponent, canActivate: [authGuard]},
    {path:'**',component:NotFoundComponentComponent}
  ];
 