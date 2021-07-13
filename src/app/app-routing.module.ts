import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminAllProductsComponent } from './components/admin-all-products/admin-all-products.component';
import { AdminComponent } from './components/admin/admin.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PurchaseComponent } from './components/purchase/purchase.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'purchase-item/:id', component: PurchaseComponent },
  { path: 'thank-you', component: ThankYouComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminAllProductsComponent },
      { path: 'add-product', component: AdminAddProductComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
