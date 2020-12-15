import { Component, OnInit } from '@angular/core';
import { ProductsModule } from 'src/app/products/products.module';
import { NgModule } from '@angular/core';

import {ItemService} from '../../items/item.service'
import { ItemsComponent } from '../items.component';
import { Product } from '../product';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})



export class ViewItemComponent implements OnInit {

  itemList: Product;

  closeResult = '';
  constructor(private modalService: NgbModal,private _itemService: ItemService) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: `;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this._itemService.getAllItems().subscribe(data=>{
      this.itemList =data;
    }); 
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
    console.log(data);
  })
}

}