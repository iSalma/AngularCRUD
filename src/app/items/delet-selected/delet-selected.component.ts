import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';
import { Product } from '../product';

@Component({
  selector: 'app-delet-selected',
  templateUrl: './delet-selected.component.html',
  styleUrls: ['./delet-selected.component.scss']
})
export class DeletSelectedComponent implements OnInit {

  @Input() myIDs = new EventEmitter<number>();

  productData : Product
  ={    
    "cat":1,
  "id":2,
  "name":"l",
  "code":1,
  "price":1,
  "isChecked":true
}; //has to be assigned first

  constructor(private _ItemsService: ItemService) { }

  ngOnInit(): void {

  }

  // isCheckl(){
  //       this._ItemsService.getOne(this.myID).subscribe(productD => {
  //       this.productData.isChecked = productD.isChecked; 
  //       console.log(this.productData.isChecked);
        
  //     });
    
  // }

  deleteChecked(){
    console.log(this.myIDs.length); //array of selected items IDs

    for(let i=0; i < (this.myIDs.length); i++){
      this._ItemsService.deleteItem(this.myIDs[i]).subscribe(deleteProductdata => {
        console.log(deleteProductdata);
      });
    }

  }


}
