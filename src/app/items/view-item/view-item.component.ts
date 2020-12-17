import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ItemService} from '../../items/item.service'
import { Product } from '../product';



@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})



export class ViewItemComponent implements OnInit {

  itemList: Product;
  currentID:number;

  constructor(private _itemService: ItemService) { }

  ngOnInit(): void {
    this._itemService.getAllItems().subscribe(data=>{
      this.itemList =data;
    }); 
}


  itemID(itemID){
  console.log(itemID);
  this.currentID = itemID;
  console.log(this.currentID);
  return itemID;
}
 
  // receivedChildMessage: number;
  // getMessage(message: number) {
  //   this.receivedChildMessage = message;
  //   console.log(message);
  // }

  



}