import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';

import { ItemsComponent } from './items.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewOneComponent } from './view-one/view-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-item', pathMatch:'full'},
  { path:'add-item', component: AddItemComponent},
  { path:'view-item', component: ViewItemComponent},
  { path:'update-item/:index', component: UpdateItemComponent},
  { path:'delete-item/:index', component: DeleteItemComponent},
  { path:'view-one/:id', component:ViewOneComponent},
  { path:'category/:id', component:ViewCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
