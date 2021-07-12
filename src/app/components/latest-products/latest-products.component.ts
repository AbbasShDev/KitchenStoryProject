import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getLatestProducts();
  }

  getLatestProducts(): void {
    this.productsService
      .getProductsList()
      .snapshotChanges()
      .forEach((productsSnapshot) => {
        this.products = [];

        for (
          let i = productsSnapshot.length - 8;
          i < productsSnapshot.length;
          i++
        ) {
          let product: any = productsSnapshot[i].payload.toJSON();
          product['id'] = productsSnapshot[i].key;
          this.products.push(product as IProduct);
        }
      });
  }
}
