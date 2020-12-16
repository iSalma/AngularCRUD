import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Product } from '../product';

import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';

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


  closeResult = '';
  hello ="mmm"

  constructor(private modalService: NgbModal,private _activatedRoute: ActivatedRoute, private _ItemsService: ItemService) { }

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
    this._activatedRoute.params.subscribe(data => {
      this.itemID =3; //moshkla hna f data btl3 {} fady, lkn lw bdlt id b id f json by update l obj da
      console.log(data.id);

      // this._ItemsService.getOne(this.itemID).subscribe(productD => {
      //   this.productData = productD; // get the existing data of the product
        // console.log(this.productData);
      });

    // });
  }

  updateProduct(form){
    // form.value.name = "hii";
    // console.log(form.value);
    const updateProduct = {
      cat:form.value.cat,
      name:form.value.name,
      code:form.value.code,
      price:form.value.price,
    };
    // this._ItemsService.updateItem(this.itemID,updateProduct).subscribe(data => {
    //   console.log(data);
  // });
  
}

}