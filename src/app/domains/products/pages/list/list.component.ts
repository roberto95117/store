
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '@/shared/models/product.model';
import { CategoryService } from '@/shared/services/category.service';
import { Category } from '@/shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  cart = signal<Product[]>([]);
  cartSrv = inject(CartService);
  productSrv = inject(ProductService);
  categorySrv = inject(CategoryService);

  @Input() category_id?: string;

  constructor(){
    const initProd: Product[] = []
    this.products.set(initProd);
  }

  ngOnInit(): void {
    this.getProducts();
    this.categorySrv.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const cat = changes['category_id'];
    if(cat){
      this.getProducts();
    }
  }

  getProducts(){
    this.productSrv.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      }
    });
  }

  addToCart(value: Product){
    this.cartSrv.addTocart(value);
  }
}
