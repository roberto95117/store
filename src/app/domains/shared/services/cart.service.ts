import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cartT= this.cart();
    return cartT.reduce((total, product) => total + product.price, 0);
  });

  constructor() { }

  addTocart(product: Product){
    this.cart.update(prevSt => [...prevSt, product]);
  }
}
