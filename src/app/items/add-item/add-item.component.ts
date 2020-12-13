import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private _itemService:ItemService) { }

  ngOnInit(): void {
  }

  addProduct(form){
    let newProduct = {
      index:10,
      id:form.value.id,
      name:form.value.name,
      code:form.value.code,
      price:form.value.price,
    };

    this._itemService.addItem(newProduct).subscribe(data =>{
    })
  }

}
