import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  productData: Product ;
  
  
  itemID= 0;

 
  product = {
    "id":1,
    "name":"lnh",
    "code":55,
    "price":55
  }
  constructor(private _activatedRoute: ActivatedRoute, private _ItemsService: ItemService) { }

  ngOnInit(): void {
 
    // this._activatedRoute.params.subscribe(data => {
    //   this.itemID = data.id;
    // });
  }

  updateProduct(form){
    console.log(form);
    const updateProduct = {
      index:20,
      id:form.value.id,
      name:form.value.name,
      code:form.value.code,
      price:form.value.price,
    };
    this._ItemsService.updateItem(this.productData,updateProduct);


  }

}
