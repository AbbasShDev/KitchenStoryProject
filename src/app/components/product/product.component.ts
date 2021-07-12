import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getProduct(param['id']);
    });
  }

  getProduct(id: string): void {
    this.activatedRoute.params.subscribe((param) => {
      this.productsService
        .getProductById(id)
        .snapshotChanges()
        .forEach((product) => {
          let newProdcut: any = product.payload.toJSON();
          newProdcut['id'] = product.key;
          this.product = newProdcut as IProduct;
        });
    });
  }
}
