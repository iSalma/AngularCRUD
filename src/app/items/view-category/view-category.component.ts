import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Product } from '../product';
import { Category } from 'src/app/screen/category';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  category: Category;
  itemList: Product;

  closeResult = '';

  constructor(private modalService: NgbModal,private _activatedRoute: ActivatedRoute, private _itemService:ItemService) { }

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
      this.category = data.id;

    this._itemService.viewCategory(this.category).subscribe(catData => {
      this.itemList = catData;

    })
    });
  }

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
