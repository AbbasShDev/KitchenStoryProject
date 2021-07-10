import { IProduct } from './../../interfaces/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = [
    {
      id: '1qwerty',
      name: 'Tomato',
      price: 1999,
      image: 'https://freepngimg.com/thumb/tomato/6-tomato-png-image.png',
    },
    {
      id: '2qwerty',
      name: 'Broccoli',
      price: 2999,
      image:
        'https://freepngimg.com/thumb/broccoli/12-broccoli-png-image-with-transparent-background.png',
    },
    {
      id: '3qwerty',
      name: 'Cabbage',
      price: 3499,
      image: 'https://freepngimg.com/thumb/cabbage/6-cabbage-png-image.png',
    },
    {
      id: '4qwerty',
      name: 'Potato',
      price: 999,
      image:
        'https://freepngimg.com/thumb/potato/7-potato-png-images-pictures-download.png',
    },
    {
      id: '5qwerty',
      name: 'Red Chili Pepper',
      price: 2499,
      image:
        'https://freepngimg.com/thumb/pepper/37-red-chili-pepper-png-image.png',
    },
    {
      id: '6qwerty',
      name: 'Cucumber',
      price: 1999,
      image:
        'https://freepngimg.com/thumb/cucumber/11-cucumber-png-image-picture-download.png',
    },
    {
      id: '7qwerty',
      name: 'Onion',
      price: 1999,
      image: 'https://freepngimg.com/thumb/onion/8-onion-png-image.png',
    },
    {
      id: '8qwerty',
      name: 'Eggplant',
      price: 999,
      image:
        'https://freepngimg.com/thumb/eggplant/14-eggplant-png-images-download.png',
    },
  ];

  constructor() {}

  getProductsList(): IProduct[] {
    return this.products;
  }
}
