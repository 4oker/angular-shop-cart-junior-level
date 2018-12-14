import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent} from './calculator/calculator.component';
import { CarsComponent }   from './cars/cars.component';
import { ProductsComponent }      from './products/products.component';
import { ProductInfoComponent }  from './product-info/product-info.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'detail/:id', component: ProductInfoComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'navbar', component: NavbarComponent},
 { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}