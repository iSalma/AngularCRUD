import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DeletSelectedComponent } from './delet-selected/delet-selected.component'


@NgModule({
  declarations: [ItemsComponent,
     AddItemComponent,
      ViewItemComponent, 
      UpdateItemComponent,
       DeleteItemComponent,
       ViewCategoryComponent,
       ViewOneComponent,
       DeletSelectedComponent
      ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    // NgForm,
    // ReactiveFormsModule
  ]
})
export class ItemsModule { }
