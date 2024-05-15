import { CartService } from './../../../shared/services/cart.service';
import { Product } from '@/shared/models/product.model';
import { ProductService } from '@/shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productSrv = inject(ProductService);
  private cartSrv = inject(CartService);

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit(): void {
    if(this.id){
      this.productSrv.getOne(this.id)
      .subscribe({
        next: (res) => {
          this.product.set(res);
          if(this.product()?.images){
            this.cover.set(this.product()?.images[0] ?? '');
          }
        }
      })
    }
  }

  coverChange(img: string){
    this.cover.set(img);
  }

  addToCart(){
    const pr = this.product();
    if(pr){
      this.cartSrv.addTocart(pr);
    }
  }
}
