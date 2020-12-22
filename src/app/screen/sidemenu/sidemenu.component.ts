import { Component, OnInit  } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';
import { Product } from 'src/app/items/product';
import { map } from 'rxjs/operators';

import {ItemService} from '../../items/item.service'
import { Category } from '../category';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  categoryList:Category;
  closeResult = '';
  categoryName:string = "";
  itemList:Product;
  result=[];

  constructor(private modalService: NgbModal, private _itemService: ItemService) { }

  getVal(item){
    this.categoryName = item.target.value;
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${this.categoryName}`;
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

  // addCategory(){ 
  //   let row = document.createElement('div');   
  //     row.innerHTML = ` 
  //     <a href="#" class="list-group-item">${this.categoryName}</a>`; 
  //     document.querySelector('.showLink').appendChild(row); 
  // } 
  

  ngOnInit(): void {
    this._itemService.getCategories().subscribe(data =>{
      this.categoryList = data;
    });

  }

    addCat(form){
    let newCat = {
      // id:form.value.id,
      categoryName:form.value.categoryName,
    };
    console.log(newCat);
    this._itemService.addCategory(newCat).subscribe(data =>{
      console.log(data);
    });
  }

  removeCat(catID){
    console.log(catID);
    this._itemService.deleteCategory(catID).subscribe(data =>{
      // console.log(data);
    });

    //delete all related products
    this._itemService.viewCategory(5, '', '').subscribe(data => {
      console.log(data);
      for( let i in data){
        console.log(data[i].id);

        this._itemService.deleteItem(data[i].id).subscribe(deleteProductdata => {
          console.log(deleteProductdata);
        });

      }
    });
 

  }

}

