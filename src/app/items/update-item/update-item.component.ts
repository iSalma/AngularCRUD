import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  itemID= 0;
  productData: Product;
  //  ={    
  //   "index":1,
  // "id":22,
  // "name":"lnh",
  // "code":55,
  // "price":55};

  itemList: Product;
  productId = 0;

  constructor(private _activatedRoute: ActivatedRoute, private _ItemsService: ItemService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.itemID = data.index;

      this._ItemsService.getOne(this.itemID).subscribe(productD => {
        this.productData = productD; // get the existing data of the product
        console.log(this.productData);
      });

    });
  }

  updateProduct(form){
    form.value.name = "hii";
    console.log(form.value);
    const updateProduct = {
      // index:20,
      id:form.value.id,
      name:form.value.name,
      code:form.value.code,
      price:form.value.price,
    };
    this._ItemsService.updateItem(this.itemID,updateProduct).subscribe(data => {
      console.log(data);
  });
  
}

}