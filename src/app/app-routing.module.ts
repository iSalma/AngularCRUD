import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'products', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
