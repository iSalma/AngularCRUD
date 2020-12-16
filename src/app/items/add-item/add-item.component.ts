import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  closeResult = '';
  constructor(private modalService: NgbModal,private _itemService:ItemService) { }


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
  }

  addProduct(form){
    let newProduct = {
      cat:form.value.cat,
      name:form.value.name,
      code:form.value.code,
      price:form.value.price,
    };

    this._itemService.addItem(newProduct).subscribe(data =>{
      console.log(data);
    })
  }

}
