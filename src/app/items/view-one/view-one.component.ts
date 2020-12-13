import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ItemService} from '../../items/item.service'
import { Product } from '../product';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.scss']
})
export class ViewOneComponent implements OnInit {

  itemList: Product;
  productId = 0;
  constructor(private _activatedRoute: ActivatedRoute, private _itemService:ItemService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data=>{
      this.itemList =data.id;
    // this._itemService.getOne(this.productId).subscribe(data=>{
    //     this.itemList =data;
        console.log(data)
          
    });
  }

}
