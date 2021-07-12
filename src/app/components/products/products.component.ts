import { ProductsService } from './../../services/products/products.service';
import { IProduct } from './../../interfaces/IProduct';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
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
      });
  }
}
