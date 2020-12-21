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
  page:number=1;
  limit:number=3;

  constructor(private _itemService: ItemService) { }

  ngOnInit(): void {

    this._itemService.getAllItems(1,3).subscribe(data=>{
      this.itemList =data;
      console.log("n"+Object.keys( this.itemList).length);
    }); 
}

changePgae(event){
  console.log(event.target.text);
  this.page= event.target.text;

  this._itemService.getAllItems(this.page,this.limit).subscribe(data=>{
    this.itemList =data;
    console.log("n"+Object.keys( this.itemList).length);
  }); 
}

changeLimit(event){
  console.log(event.target.value);
  this.limit=event.target.value;

  
  this._itemService.getAllItems(this.page, this.limit).subscribe(data=>{
    this.itemList =data;
    console.log("n"+Object.keys( this.itemList).length);
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

  selectedItems:number[]=[];
  isCheck(event, itemID) {
      console.log(itemID);
      
      if ( event.target.checked == true) {
        this.selectedItems.push(itemID);
        console.log("true");
      }
      else{
        const index = this.selectedItems.indexOf(itemID);
        if (index > -1) {
          this.selectedItems.splice(index, 1);
        }      
        console.log("false");
      }
      console.log(this.selectedItems);
    }

}