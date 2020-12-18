import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  @Input() myID = new EventEmitter<number>();

  itemID= 0;
  constructor(private _activatedRoute: ActivatedRoute,  private _ItemsService: ItemService) { }

  ngOnInit(): void {

    // this._activatedRoute.params.subscribe(data => {
    //   this.itemID = data.id;
    //   console.log(data);
    //   this._ItemsService.deleteItem(this.itemID).subscribe(deleteProductdata => {
    //     console.log(deleteProductdata);
    //   });
    // });
  }


  funDelete(){

      this._ItemsService.deleteItem(this.myID).subscribe(deleteProductdata => {
        console.log(deleteProductdata);
      });
  }

}
