import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  // { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
