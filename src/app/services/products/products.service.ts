import { IProduct } from './../../interfaces/IProduct';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.productsList = this.firebase.list('products');
  }

  getProductsList() {
    return this.productsList;
  }

  getProductById(id: string) {
    return this.firebase.object('products/' + id);
  }
}
