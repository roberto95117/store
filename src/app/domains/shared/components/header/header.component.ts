import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  /**
   * Se comenta porque uso servicio
   */
  /*
  @Input() cart: Product[] = [];
  total = signal(0);

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let hasChanged = changes['cart'];
    if(hasChanged){
      this.total.set(this.getTotalPrice());
    }
  }
  */

  cartSrv = inject(CartService);

  total = this.cartSrv.total;
  cart = this.cartSrv.cart;

  hideSideMenu = signal(true);

  toogleSideMenu(){
    this.hideSideMenu.update(prevSt => !prevSt);
  }


}
