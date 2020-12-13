import { Component, OnInit } from '@angular/core';
import { ProductsModule } from 'src/app/products/products.module';
import { NgModule } from '@angular/core';

import {ItemService} from '../../items/item.service'
import { ItemsComponent } from '../items.component';
import { Product } from '../product';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})



export class ViewItemComponent implements OnInit {

  itemList: Product;
  constructor(private _itemService: ItemService) { }

  ngOnInit(): void {
    this._itemService.getAllItems().subscribe(data=>{
      this.itemList =data;
    }); 
}

}