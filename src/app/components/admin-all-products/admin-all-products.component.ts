import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-admin-all-products',
  templateUrl: './admin-all-products.component.html',
  styleUrls: ['./admin-all-products.component.scss'],
})
export class AdminAllProductsComponent implements OnInit {
  products!: IProduct[];
  isLoadingProducts: boolean = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsService
      .getProductsList()
      .snapshotChanges()
      .forEach((productsSnapshot) => {
        this.products = [];
        productsSnapshot.forEach((productSnapshot) => {
          let product: any = productSnapshot.payload.toJSON();
          product['id'] = productSnapshot.key;
          this.products.push(product as IProduct);
        });

        this.products.reverse();
        this.isLoadingProducts = false;
      });
  }

  deletProduct(id: string | undefined) {
    if (confirm('Are sure you want to delete this product?')) {
      this.productsService.deleteProduct(id);
    }
  }
}
