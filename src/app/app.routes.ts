import { Routes } from '@angular/router';
import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(c => c.ListComponent)
      },
      {
        path:'about',
        loadComponent: () => import('./domains/info/pages/about/about.component').then(c => c.AboutComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@/products/pages/product-detail/product-detail.component').then(c => c.ProductDetailComponent)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
